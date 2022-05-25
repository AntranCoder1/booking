import React, { useState } from 'react';
import "./Update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const UpdateUser = ({ title }) => {

    const [file, setFile] = useState("");

    const location = useLocation();
    const userId = location.pathname.split("/")[3];

    const user = useSelector(state => 
        state.users.users.find((item) => item._id === userId)
    );

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={
                            file 
                                ? URL.createObjectURL(file) 
                                : user.img
                        } 
                        alt=""     
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input 
                                    type="text" 
                                    placeholder={user.username}
                                    name="username"
                                />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input 
                                    type="email"
                                    placeholder={user.email}
                                    name="email"
                                />
                            </div>
                            <div className="formInput">
                                <label>Phone</label>
                                <input 
                                    type="text"
                                    placeholder={"+" + user.phone}
                                    name="phone"
                                />
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input 
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                />
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input 
                                    type="text"
                                    placeholder={user.country}
                                    name="country"
                                />
                            </div>
                            <div className="formInput">
                                <label>City</label>
                                <input 
                                    type="text" 
                                    placeholder={user.city}
                                    name="city"
                                />
                            </div>
                            <button>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser