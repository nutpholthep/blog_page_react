import { Link, useNavigate } from "react-router-dom";
import Avatar from "../images/avatar15.jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState ,useEffect,useContext} from "react";
import { UserContext } from "../context/userContext";
function UserProfile() {
  const [avatar, setAvatar] = useState(Avatar);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [currentPassword,setCurrentPassword] = useState('');
  const [newPassword,setNewPassword] = useState('');
  const [confirmNewPassword,setConfirmNewPassword] = useState('');
  const {currentUser} = useContext(UserContext);
  const token = currentUser?.id;
  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/login');
    }
  },[])
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/mypost/sdad`} className="btn">
          My Post
        </Link>

        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
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

          {/* form update user detail */}
          <form className="form profile__form">
            <p className="form__error-message">
              This is an Error Message
            </p>
            <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Current Password" value={currentPassword} onChange={e=>setCurrentPassword(e.target.value)}/>
            <input type="password" placeholder="New Password" value={newPassword} onChange={e=>setNewPassword(e.target.value)}/>
            <input type="password" placeholder="Confirm Password" value={confirmNewPassword} onChange={e=>setConfirmNewPassword(e.target.value)}/>
            <button className="btn primary">Update Detail</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
