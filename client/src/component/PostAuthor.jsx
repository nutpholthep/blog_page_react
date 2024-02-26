/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Avatar from "../images/avatar1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json"
import th from "javascript-time-ago/locale/th.json"

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(th);

function PostAuthor({ creator, createdAt }) {
  const [author, setAuthor] = useState({});

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
    console.log(author);
  }, []);
  // if (!createdAt) {
  //   return <small>กำลังโหลด...</small>;
  // }
  return (
    <Link to={"/post/user/sdad"} className="post__author">
      <div className="post__author-avatar">
        <img src={`${import.meta.env.VITE_REACT_APP_BASE_ASSETS}/uploads/${author?.avatar}`} alt="" />
      </div>
      <div className="post__author-details">
        <h5>By: {author.name}</h5>
        <small><ReactTimeAgo date={new Date(createdAt)} locale="en-Us"/></small>
      </div>
    </Link>
  );
}

export default PostAuthor;
