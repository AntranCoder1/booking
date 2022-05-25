import React, { useState } from 'react';
import "./login.scss";
import { login } from "../../context/redux/auth/ApiAuthCall";
import { useDispatch } from "react-redux";

const Login = () => {

  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setAdmin({ ...admin, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(admin, dispatch);
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input 
          type="text"
          placeholder="username"
          name="username"
          className="lInput"
          onChange={handleChange}
        />
        <input 
          type="password"
          placeholder="password"
          name="password"
          className="lInput"
          onChange={handleChange}
        />
        <button 
          className="lButton"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login