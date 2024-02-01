import { Router } from "express";
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
router.post('/change-avatar',changeAvatar);
router.patch('/edit-user',editUser);

export default router