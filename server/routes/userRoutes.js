import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
const router = Router();
import {
    resgisterUser,
    loginUser,
    getUser,
    changeAvatar,
    editUser,
    getAuthors
} from '../controllers/userControllers.js'

router.post('/register',resgisterUser);
router.post('/login',loginUser);
router.get('/:id',getUser);
router.get('/',getAuthors);
router.post('/change-avatar',authMiddleware,changeAvatar);
router.patch('/edit-user',authMiddleware,editUser);

export default router