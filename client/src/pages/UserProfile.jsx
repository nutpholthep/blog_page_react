import { Link } from "react-router-dom";
import Avatar from "../images/avatar15.jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
function UserProfile() {
  const [avatar, setAvatar] = useState();
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`mypost/sdad`} className="btn">
          My Post
        </Link>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={Avatar} alt="" />
            </div>
            <form className="avatar__form">
              <input
                type="file"
                name="avatar"
                id=""
                accept="png,jpg,jpeg"
                onChange={(e) => setAvatar(e.target.files[0])}
              />
              <label htmlFor="avatar">
                <FaEdit />
              </label>
            </form>
              <button className="profile__avatar-btn">
                <FaCheck/>
              </button>
          </div>
          <h1>Ernest Achiever</h1>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
