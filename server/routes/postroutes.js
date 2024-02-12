import { Router } from "express";
const router = Router();
import { createPost,
    getPosts,
    getPost,
    getCatPost,
    getUserPosts,
    editPost,
    deletePost,} from '../controllers/postControllers.js';
    import authMiddleware from "../middleware/authMiddleware.js";


router.post('/',authMiddleware,createPost);
router.get('/',getPosts);
router.get('/:id',getPost);
router.get('/categories/:category',getCatPost);
router.get('/user/:id',getUserPosts);
router.patch('/:id',authMiddleware,editPost);
router.delete('/:id',authMiddleware,deletePost);

export default  router