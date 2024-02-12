import { Schema,model } from "mongoose";

const postSchema = Schema({
    title:{type:String,require:true},
    category:{type:String,enum:["Agriculture","Business","Education","Entertainment","Art","Investment","Uncategorized","Weather"],message:"{VALUE is not support}"},
    description:{type:String,require:true},
    creator:{type:Schema.Types.ObjectId,ref:"User"},
    thumbnail:{type:String,require:true},

},{timestamps:true})

export default model('Post',postSchema)