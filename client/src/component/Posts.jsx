import { useEffect, useState } from "react";
import PostItem from "./PostItem";
// import { DUMMY_POSTS } from "../data";
import Loader from "./Loader";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/posts`
        );
        setPosts(response?.data);
      } catch (error) {
        console.log(error);
      }
      setLoader(false);
    };
    fetchData();
  }, []);
  // console.log(posts);
  if (loader) {
    return <Loader />;
  }
  return (
    <section className="posts">
      {posts?.length > 0 ? (
        <div className="container posts__container">
          {posts.map(
            ({
              _id: id,
              category,
              thumbnail,
              creator,
              description,
              title,
              createdAt,
            }) => (
              <PostItem
                key={id}
                postId={id}
                category={category}
                thumbnail={thumbnail}
                authorID={creator}
                desc={description}
                title={title}
                createdAt={createdAt}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center">No Post Found</h2>
      )}
    </section>
  );
}

export default Posts;
