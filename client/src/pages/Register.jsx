import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function changeInputHandle(e) {
    setUserData((preVal) => {
      return { ...preVal, [e.target.name]: e.target.value };
    });
  }
  async function registerUser(e) {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/users/register`,userData);
      const newUser = await response.data;
      // console.log(newUser);
      if(!newUser){
        setError("Cloudn't resgiset user try again");
      }
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.code);
    }
  }
  // console.log(userData);
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form action="" className="form register__form" onSubmit={registerUser}>
          {error && <p className="form__error-message">{error}</p>}
          <input
            type="text"
            name="name"
            id=""
            placeholder="Full Name"
            value={userData.name}
            onChange={changeInputHandle}
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            value={userData.email}
            onChange={changeInputHandle}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            value={userData.password}
            onChange={changeInputHandle}
          />
          <input
            type="password"
            name="password2"
            id=""
            placeholder="Confirm Password"
            value={userData.password2}
            onChange={changeInputHandle}
          />
          <button className="btn primary">Register</button>
        </form>
        <small>
          Already have an account ? <Link to={"/login"}>Sign in</Link>
        </small>
      </div>
    </section>
  );
}

export default Register;
