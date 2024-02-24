/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Avatar from "../images/avatar1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
function PostAuthor({ creator, createdAt }) {
  const [author, setAuthor] = useState({});
  const date = new Date(createdAt)
  console.log(date)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/users/${creator}`
        );
        setAuthor(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(author);
  return (
    <Link to={"/post/user/sdad"} className="post__author">
      <div className="post__author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: {author.name}</h5>
        <small>{}</small>
      </div>
    </Link>
  );
}

export default PostAuthor;
