import  jwt  from "jsonwebtoken";
import HttpError from "../models/errorModel.js";

const authMiddleware = async(req,res,next) =>{
    const Authorization = req.headers.Authorization || req.headers.authorization
    if (Authorization && Authorization.startsWith('Bearer')) {
        const token = Authorization.split(' ')[1];
        jwt.verify(token,process.env.JWT_SECRET,(err,info)=>{
            if (err) {
               return next(new HttpError('Unauthorization invalid token.',403)) ;
            }
            req.user = info;
            console.log(req.headers);
            next()
        })
    }else{
        return next(new HttpError('Unauthorization no token.',402)) ;
    }
}
export default authMiddleware