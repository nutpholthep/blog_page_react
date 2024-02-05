import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import "dotenv/config";
import userRoutes from './routes/userRoutes.js' ;
import postRoutes from './routes/postRoutes.js' ;
import { notFound,errorHanddle } from "./middleware/errorMiddleware.js";
import fileUpload from "express-fileupload";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log(__dirname);
// console.log(__filename);

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(cors({credential:true,origin:"http://loaclhost:3000"}));
app.use(fileUpload());
app.use('/upload',express.static(__dirname + '/uploads'));

app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.use(notFound);
app.use(errorHanddle);

connect(process.env.MONGO_URI)
.then(app.listen(process.env.PORT, () => console.log(`server is running on ${process.env.PORT}`)))
.catch(error =>console.error(error));