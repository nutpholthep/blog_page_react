import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  function changeInputHandle(e){
    setUserData(preVal=>{
     return {...preVal,[e.target.name]:e.target.value}
    })
  }
  console.log(userData);
  return (
    <section className="register">
      <div className="container">
        <h2>Sign In</h2>
        <form action="" className="form register__form">
          <p className="form__error-message">This is error message</p>
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
