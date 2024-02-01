import { Router } from "express";
const router = Router();

router.get('/',(req,res,next)=>{
    res.json('This is Post Routes');
})

export default  router