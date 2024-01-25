import React, { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
function EditPost() {
  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('Uncategorized')
  const [description,setDescription] = useState('');
  const [thumbnail,setThumbnail] = useState('');

const modules ={
  toolbar:[
    [{'header':[1,2,3,4,5,6,false]}],
    ["bold","italic","underline","strike","blackquote"],
    [{"list":"ordered"},{"list":"bullet"},{"indent":"-1"},{"indent":"+1"}],
    ["link","image"],
    ["clean"]
  ]
};

const format = [
  "header",
  "bold","italic","underline","strike","blackquote"
  ,"list","bullet","indent",
  "link","image"

];
  const POST_CATEGORY = ["Agriculture","Bussiness","Education","Entertainment","Art","Investment","Uncategorized","Weather"];
  return (
    <section className="create-post">
    <div className="container">
      <h2>Edit Post</h2>
      <p className="form__error-message">
        this is an Error Meassage
      </p>
      <form action="" className="form create__post-form">
        <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
        <select name="category" id="" value={category} onChange={e=>setCategory(e.target.value)}>
        {POST_CATEGORY.map((category,index)=><option key={index}>{category}</option>)}
        </select>
        <ReactQuill modules={modules} formats={format} value={description} onChange={setDescription} className='q-editor'/>
        <input type="file" name="thumbnail" id="" onChange={e=>setThumbnail(e.target.files[0])} accept='png,jpg,jpeg'/>
        <input type="text" placeholder='Title' value={title}/>
        <button className='btn primary'>Update</button>
      </form>
    </div>
   </section>
  )
  
}

export default EditPost