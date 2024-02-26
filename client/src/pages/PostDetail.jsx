import { useContext, useEffect, useState } from "react";
import PostAuthor from '../component/PostAuthor';
import { Link, useParams } from "react-router-dom";
// import Thumbnail22 from "../images/blog23.jpg";
import DeletePost from "./DeletePost";
import Loader from "../component/Loader";
import { UserContext } from "../context/userContext";
import axios from "axios";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const {createdAt} = post;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    getPost();
  }, []);
  if (loading) {
    return <Loader />;
  }
console.log(typeof new Date(post.createdAt));
  return (
    <section className="post__detail">
      {error && <p className="error">{error}</p>}
      {post && (
        <div className="container post-detail__container">
          <div className="post-detail__header">
            <PostAuthor creator={post?.creator} createdAt={new Date(post.createdAt)}/>
            {currentUser?.id !== post?.creator && (
              <div className="post-detail__buttons">
                <Link to={"/post/were/edit"} className="btn sm primary">
                  Edit
                </Link>
                <DeletePost />
              </div>
            )}
          </div>
          <h1>{post?.title}</h1>
          <div className="post-detail__thumbnail">
            <img
              src={`${import.meta.env.VITE_REACT_APP_BASE_ASSETS}/uploads/${
                post?.thumbnail
              }`}
              alt=""
            />
          </div>
          <p>{post.description}</p>
        </div>
      )}
    </section>
  );
}

export default PostDetail;
