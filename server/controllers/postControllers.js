import Post from "../models/postModel.js";
import User from "../models/userModel.js";
import { v4 } from "uuid";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import HttpError from "../models/errorModel.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/*======== CREATE POST  =============*/
//POST:api/posts
//PROTECTED
const createPost = async (req, res, next) => {
    try {
        const { title, category, description } = req.body;
        if (!title || !category || !description || !req.files) {
            return next(new HttpError("Fill in all field and choose thumbnail", 422))
        }
        const { thumbnail } = req.files;
        if (thumbnail.size > 2000000) {
            return next(new HttpError("Thumnail too big should be less than 2MB"))
        }

        const fileName = thumbnail.name;
        const splitedFileName = fileName.split(".");
        const newFileName = splitedFileName[0] + v4() + "." + splitedFileName[splitedFileName.length - 1];
        thumbnail.mv(path.join(__dirname, "..", "uploads", newFileName), async (err) => {
            if (err) {
                return next(new HttpError(err))
            } else {
                const newPost = await Post.create({ title, category, description, thumbnail: newFileName, creator: req.user.id });
                if (!newPost) {
                    return next(new HttpError("Post couldn't be created.", 422))
                }

                //find user and increate post count by 1
                const currentUser = await User.findById(req.user.id);
                const userPostCount = currentUser.post + 1;
                console.table(userPostCount);
                await User.findByIdAndUpdate(req.user.id, { post: userPostCount });

                res.status(201).json(newPost);
            }

        })
    } catch (error) {
        return next(new HttpError(error));
    }
};

/*======== GET ALL POST  =============*/
//GET:api/posts
//UNPROTECTED
const getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().sort({ updatedAt: -1 });
        res.status(200).json(posts)
    } catch (error) {
        return next(new HttpError(err))
    }
};

/*======== GET SINGLE POST  =============*/
//GET:api/posts/:id
//UNPROTECTED
const getPost = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);
        if (!post) {
            return next(new HttpError("Post not Found", 404));
        }
        res.status(200).json(post);
    } catch (err) {
        return next(new HttpError(err))
    }
};

/*======== GET POST BY CATEGORY   =============*/
//GET:api/posts/categories/:category
//UNPROTECTED
const getCatPost = async (req, res, next) => {
    try {
        const { category } = req.params;
        const catPosts = await Post.find({ category }).sort({ createAt: -1 });
        res.status(200).json(catPosts);
    } catch (error) {
        return next(new HttpError(error))
    }
};

/*======== GET USER/AUTHOR POST   =============*/
//GET:api/posts/user/:id
//UNPROTECTED
const getUserPosts = async (req, res, next) => {
    try {
        const { id } = req.params;
        const posts = await Post.find({ creator: id }).sort({ createAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        return next(new HttpError(error))
    }
};

/*======== EDIT POST   =============*/
//PATCH:api/posts/:id
//PROTECTED
const editPost = async (req, res, next) => {
    try {
        let fileName;
        let newFileName;
        let updatedPost;
        const postId = req.params.id;
        let { title, category, description } = req.body;

        //React Quil has a paragraph opening and closing tag with a break tag in between so there are 11 characters in there already
        if (!title || !category || description.length < 12) {
            return next(new HttpError('Fill in all field', 422));
        }
        // get old post from database
        const oldPost = await Post.findById(postId);

        if (req.user.id == oldPost.creator) {
            if (!req.files) {
                updatedPost = await Post.findByIdAndUpdate(postId, { title, category, description }, { new: true });
            } else{

            //delete old thumbnail from uploads
            fs.unlink(path.join(__dirname, "..", "uploads", oldPost.thumbnail), async (err) => {
                if (err) {
                    next(new HttpError(err));
                }
            });

            //upload new thumbnaill to database
            const { thumbnail } = req.files;
            //check file size
            if (thumbnail.size > 2000000) {
                return next(new HttpError("thumbnail  too big should be less than 2MB"))
            }
            fileName = thumbnail.name;
            let splitedFileName = fileName.split(".")[0];
            newFileName = splitedFileName + v4() + "." + splitedFileName[splitedFileName.length - 1];
            thumbnail.mv(path.join(__dirname, "..", "uploads", newFileName), async (err) => {
                if (err) {
                    return next(new HttpError(err));
                }
                updatedPost = await Post.findByIdAndUpdate(postId, { title, category, description, thumbnail: newFileName }, { new: true });
            });

            if (!updatedPost) {
                return next(new HttpError("Couldn't be update post ", 400))
            }
        }
    }else{
        return next(new HttpError("Couldn't be update post ", 400))
    }

        res.status(200).json(updatedPost)
    } catch (error) {
        return next(new HttpError(error))
    }
};

/*======== DELETE POST   =============*/
//PATCH:api/posts/:id
//PROTECTED
const deletePost = async (req, res, next) => {
    try {
        const postsId = req.params.id;
        const post = await Post.findById(postsId);

        const fileName = post?.thumbnail;
        if (req.user.id == post.creator) {
            fs.unlink(path.join(__dirname, "..", "uploads", fileName), async (err) => {
                if (err) {
                    return next(new HttpError(err))
                } else {
                    await Post.findByIdAndDelete(postsId);
                    // find user and reduce post count by 1
                    const currentUser = await User.findById(req.user.id);
                    const userPostCount = currentUser?.post - 1
                    await User.findByIdAndUpdate(req.user.id, { post: userPostCount });
                }
            });

            res.json(`Post ${postsId} delete successfully`);
        } else {
            return next(new HttpError("Post couldn't be not delelted", 403))
        }
    } catch (error) {
        return next(new HttpError(error))
    }
};

export {
    createPost,
    getPosts,
    getPost,
    getCatPost,
    getUserPosts,
    editPost,
    deletePost,
}