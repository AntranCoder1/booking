import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/AuthRedux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const users = useSelector(state => state.auth.user?.details);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo">anbooking</span>
                </Link>
                { users ? (
                    <>
                        {users.username}
                        <button onClick={handleLogout} className="navButton">Logout</button>
                    </>
                ) : (
                    <div className="navItems">
                        <button className="navButton">Register</button>
                        <Link to={"/login"}>
                            <button className="navButton">Login</button>
                        </Link>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Navbar