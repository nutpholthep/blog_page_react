import { useState } from "react";

import PostItem from "./PostItem";
import { DUMMY_POSTS } from "../data";
function Posts() {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
    {posts.length > 0 ?  <div className="container post__container">
      {posts.map(({ id, category, thumbnail, authorID, desc ,title}) => (
        <PostItem
          key={id}
          postId={id}
          category={category}
          thumbnail={thumbnail}
          authorID={authorID}
          desc={desc}
          title={title}
        />
      ))}
      </div>:<h2 className="center">No Post Found</h2>}
    </section>
   
  );
}

export default Posts;
