// Unsupported(404) not found routes

const notFound = (req,res,next)=>{
    const error = new Error(`Not Found ${req.originalUrl}`);
    res.status(404);
    next(error);
}

// Middleware to handle Errors

const errorHanddle = (error,req,res,next) =>{
 if(req.headerSent){
    return next(error);
 }
 console.log(error);
 res.status(error.code || 500).json({message:error.message || "An unknow error occured"})
}

export {notFound,errorHanddle }

