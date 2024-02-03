import User from "../models/userModel.js"
import HttpError from "../models/errorModel.js"
import bcrypts from "bcryptjs";
// ============REGISTER A NEW USER
// POST : api/user/register 
// UNPROTECTED
const resgisterUser = async (req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body;
        if (!name || !email || !password || !password) {
            return next(new HttpError('Fill in all fields',422));
        }
        const newEmail = email.toLowerCase();
        const emailExists = User.findOne({ email: newEmail });

        if (emailExists) {
            next(new HttpError('Email already exists'));
        }

        if ((password.trim().length) < 6){
            return next(new HttpError ('Password should be least 6 characters.',422));
        }

        if(password !== password2){
            return next(new HttpError('Password do not match.',422))
        }

        const salt = await bcrypts.genSalt(10);
        const hashedPass = await bcrypts.hash(password,salt);
        const newUser = await User.create({name,email:newEmail,password:hashedPass});

        res.status(201).json(newUser);
    } catch (error) {
        return next(new HttpError('User registration failed', 422))
    }
}


// ============ LOGIN REGISTED A NEW USER
// POST : api/user/register 
// UNPROTECTED
const loginUser = async (req, res, next) => {
    res.json('Login User')
}


// ============PROFILE USER
// GET : api/user/:id
// PROTECTED
const getUser = async (req, res, next) => {
    res.json('User Profile')
}


// ============CHANGE USER AVATAR
// POST : api/user/change-avatar
// PROTECTED
const changeAvatar = async (req, res, next) => {
    res.json('Change User Avatar')
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
    res.json('Get All user/Author')
}

export {
    resgisterUser,
    loginUser,
    getUser,
    changeAvatar,
    editUser,
    getAuthors
}