import React, { useContext, useState,useEffect } from "react";
import { DUMMY_POSTS } from "../data";
import { Link ,useNavigate} from "react-router-dom";
import { UserContext } from "../context/userContext";
function Dashboard() {
  const [post, setPost] = useState(DUMMY_POSTS);
  const {currentUser} = useContext(UserContext);
  const token = currentUser?.id;
  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/login');
    }
  },[])
  return (
    <section className="dashboard">
      {post.length > 0 ? (
        <div className="container dashboard__container">
          {post.map(({ id, thumbnail, category, title, desc }) => {
            return (
              <div key={id} className="dashboard__post">
                <div className="dashboard__post-info">
                  <div className="dashboard__post-thumbnail">
                    <img src={thumbnail} alt={`image of ${title}`} />
                  </div>
                  <h5>{title}</h5>
                </div>
                <div className="dashboard__post-action">
                  <Link to={`/post/${id}`} className="btn sm">
                    View
                  </Link>
                  <Link to={`/post/${id}/edit`} className="btn primary">
                    Edit
                  </Link>
                  <Link to={`/post/${id}/delete`} className="btn danger">
                    Delete
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No post Found</h2>
      )}
    </section>
  );
}

export default Dashboard;
