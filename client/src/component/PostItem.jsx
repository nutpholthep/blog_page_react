/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
// eslint-disable-next-line react/prop-types
function PostItem({ postId, category, thumbnail, authorID, desc, title }) {
  const shortDese = desc.length > 145 ? desc.substr(0, 145) + "..." : desc;
  const postTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post__content">
        <Link to={`post/${postId}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p>{shortDese}</p>
        <div className="post__footer">
          <PostAuthor />
          <Link to={`/post/categories/${category}`} className="btn category">
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostItem;
