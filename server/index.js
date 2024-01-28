import  express  from "express";
import cors from "cors";
import { connect } from "mongoose";
import "dotenv/config";

const app = express();

app.listen(5000,()=>{
    console.log("server is running");
})