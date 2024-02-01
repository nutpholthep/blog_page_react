// ============REGISTER A NEW USER
// POST : api/user/register 
// UNPROTECTED
const resgisterUser = async (req, res, next) => {
    res.json('Resgister USer')
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