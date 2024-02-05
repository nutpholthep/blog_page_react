import User from "../models/userModel.js"
import HttpError from "../models/errorModel.js"
import bcrypts from "bcryptjs";
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from "path";
import { v4 as uuidv4, v4 } from "uuid";

// ============REGISTER A NEW USER
// POST : api/user/register 
// UNPROTECTED
const resgisterUser = async (req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body;
        if (!name || !email || !password) {
            // console.log(email);
            return next(new HttpError('Fill in all fields', 422));
        }
        const newEmail = email.toLowerCase();
        const emailExists = User.findOne({ email: newEmail });

        if (emailExists) {
            next(new HttpError('Email already exists'));
        }

        if ((password.trim().length) < 6) {
            return next(new HttpError('Password should be least 6 characters.', 422));
        }

        if (password !== password2) {
            return next(new HttpError('Password do not match.', 422))
        }

        const salt = await bcrypts.genSalt(10);
        const hashedPass = await bcrypts.hash(password, salt);
        const newUser = await User.create({ name, email: newEmail, password: hashedPass });

        res.status(201).json(newUser);
    } catch (error) {
        return next(new HttpError('User registration failed', 422))
    }
}


// ============ LOGIN REGISTED A NEW USER
// POST : api/user/register 
// UNPROTECTED
const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new HttpError('Fill in all field.', 422));
        }
        const newEmail = email.toLowerCase()
        const user = await User.findOne({ email: newEmail });
        if (!user) {
            return next(new HttpError('Invalid credentails.', 422))
        }
        const comparePass = await bcrypts.compare(password, user.password);
        if (!comparePass) {
            return next(new HttpError('Invalid credentail', 422));
        }
        const { _id: id, name } = user;
        const token = jwt.sign({ id, name }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).json({ token, id, name });

    } catch (error) {
        return next(new HttpError('Login failed. Please check your credentails.'))
    }
}


// ============PROFILE USER
// GET : api/user/:id
// PROTECTED
const getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).select('-password');
        if (!user) {
            return next(new HttpError('User not found', 404));
        }
        res.status(200).json(user);

    } catch (error) {
        return next(new HttpError(error));
    }
}


// ============CHANGE USER AVATAR
// POST : api/user/change-avatar
// PROTECTED
const changeAvatar = async (req, res, next) => {
    try {
        if (!req.files.avatar) {
            return next(new HttpError('Please choose an Image.', 422));
        }

        //find user from database
        const user = await User.findById(req.user.id);

        //delete old avatar if exists
        if (user.avatar) {
            fs.unlink(path.join(__dirname, '..', 'uploads', user.avatar, (err) => {
                if (err) {
                    return next(new HttpError(err))
                }
            }))
        }

        const {avatar} = req.files;
        if(avatar.size > 500000){
            return next(new HttpError('Profile picture too big. should be less than 500kb.',422))
        }
        let fileName;
        fileName = avatar.name;
        let splitedFileName = fileName.split('.');
        console.log(splitedFileName);
        let newFileName = splitedFileName[0] + v4() + '.' + splitedFileName[splitedFileName.length -1];
        avatar.mv(path.join(__dirname+ '..'+'uploads'+ newFileName, async (err)=>{
            if (err) {
                return new HttpError(err)
            }
            const uploadedAvatar = await User.findByIdAndUpdate(req.user.id,{avatar:newFileName},{new:true});

            if (!uploadedAvatar) {
                return new HttpError("Avatar couldn't be changed.",422)
            }
        }))

    } catch (error) {
        return next(new HttpError(error));
    }
}


// ============EDIT USER DETAIL (form-profile)
// POST : api/user/edit-user
// PROTECTED
const editUser = async (req, res, next) => {
    res.json('Edit user Profile')
}


// ============GET USER/ Authors
// POST : api/user/authors
// PROTECTED
const getAuthors = async (req, res, next) => {
    try {
        const authors = await User.find().select('-password');
        res.status(200).json(authors)
    } catch (error) {
        return next(new HttpError(error));
    }
}

export {
    resgisterUser,
    loginUser,
    getUser,
    changeAvatar,
    editUser,
    getAuthors
}