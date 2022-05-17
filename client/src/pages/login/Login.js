import React, { useState } from 'react';
import "./Login.css";
import { login } from '../../redux/AuthCall';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        try {
            login(dispatch, { username, password });
            navigate("/");
        } catch (error) {
            setUsername("");
            setPassword("");
        }
    };

    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    className="lInput"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    className="lInput"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleClick} className="lButton">
                    Login
                </button>
                {/* {error && <span>{error.message}</span>} */}
            </div>
        </div>
    )
}

export default Login