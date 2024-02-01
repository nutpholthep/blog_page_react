import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    avatar:{type:String},
    post:{type:Number,default:0}
});

export default model("User",userSchema)