import { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";

function Register() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error ,setError] = useState('');

const {setCurrentUser} = useContext(UserContext)

  function changeInputHandle(e){
    setUserData(preVal=>{
     return {...preVal,[e.target.name]:e.target.value}
    })
  }
  // console.log(userData);
 async function loginUser (e){
  e.preventDefault();
  setError('');
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/users/login`,userData);
    const user = await response.data;
    setCurrentUser(user);
    navigate('/');
  } catch (error) {
    setError(error.response.data.message);
  }
 }
  return (
    <section className="register">
      <div className="container">
        <h2>Sign In</h2>
        <form action="" className="form register__form" onSubmit={loginUser}>
          {error&&<p className="form__error-message">{error}</p>}
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            value={userData.email}
            onChange={changeInputHandle}
            autoFocus
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            value={userData.password}
            onChange={changeInputHandle}
          />
        
          <button className="btn primary">Login</button>
        </form>
        <small>dont have an account ? <Link to={"/register"}>Sign Up</Link></small>
      </div>
    </section>
  );
}

export default Register;
