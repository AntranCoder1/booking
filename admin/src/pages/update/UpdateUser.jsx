import React, { useEffect, useState } from 'react';
import "./Update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { updateUser } from "../../context/redux/user/ApiUserCall";
import { SnackbarProvider, useSnackbar } from 'notistack';
import axios from 'axios';

const UpdateUser = ({ title }) => {

    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});
    
    const dispatch = useDispatch();
    const location = useLocation();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const userId = location.pathname.split("/")[3];

    const user = useSelector(state => 
        state.users.users.find((item) => item._id === userId)
    );
    
    const handleChange = (e) => {
        const value = e.target.value;
        setInfo({ ...info, [e.target.name]: value });
    };
    
    const handleSubmit =  (variant) => async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dtukcgrf7/image/upload", data);
            const { url } = uploadRes.data;

            const newUpdate = {
                ...info,
                img: url
            };

            await updateUser(userId, newUpdate, dispatch);
            enqueueSnackbar("Update user has been complete!", { variant });
            navigate("/users");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        document.title = "update user"
    });

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
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input 
                                    type="email"
                                    placeholder={user.email}
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Phone</label>
                                <input 
                                    type="text"
                                    placeholder={"+" + user.phone}
                                    name="phone"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Country</label>
                                <input 
                                    type="text"
                                    placeholder={user.country}
                                    name="country"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>City</label>
                                <input 
                                    type="text" 
                                    placeholder={user.city}
                                    name="city"
                                    onChange={handleChange}
                                />
                            </div>
                            <button onClick={handleSubmit('success')}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser