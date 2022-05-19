import "./login.scss";
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../context/redux/ApiAuthCall';

const Login = () => {

  const [admin, setAdmin] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setAdmin({ ...admin, [e.target.name]: value });
  };

  const handleClick = (e) => {
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
        <button className="lButton" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login