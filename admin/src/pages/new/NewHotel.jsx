import React, { useState } from 'react';
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { createHotel } from "../../context/redux/hotel/ApiHotelCall";
import { useDispatch } from "react-redux";
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';

const NewHotel = ({ title }) => {

    const [hotel, setHotel] = useState(null);
    const [files, setFiles] = useState("");
    const [rooms, setRooms] = useState([]);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const { data, loading, error } = useFetch("/rooms");

    const handleChange = (e) => {
        const value = e.target.value;
        setHotel({ ...hotel, [e.target.name]: value });
    }; 

    const handleSelect = (e) => {
        const value = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setRooms(value)
    };

    const handleSubmit = (variant) => async (e) => {
        e.preventDefault();
        try {
            const list = await Promise.all(
                Object.values(files).map(async (file) => {
                    const data = new FormData();
                    data.append("file", file);
                    data.append("upload_preset", "upload");
                    const uploadRes = await axios.post(
                        "https://api.cloudinary.com/v1_1/dtukcgrf7/image/upload",
                        data
                    );

                    const { url } = uploadRes.data;
                    return url;
                })
            );

            const newhotel = {
                ...hotel,
                rooms,
                photos: list,
            };

            await createHotel(dispatch, newhotel);
            enqueueSnackbar('The hotel has been added list!', { variant });
            navigate("/hotels");
        } catch (err) {console.log(err)}
    };

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
                        <img
                            src={
                                files
                                    ? URL.createObjectURL(files[0])
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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
                                multiple
                                onChange={(e) => setFiles(e.target.files)}
                                style={{ display: "none" }}
                            />
                            </div>
                            <div className="formInput">
                                <label>Name</label>
                                <input 
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Type</label>
                                <input 
                                    type="text"
                                    placeholder="hotel"
                                    name="type"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>City</label>
                                <input 
                                    type="text"
                                    placeholder="city"
                                    name="city"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Address</label>
                                <input 
                                    type="text"
                                    placeholder="address"
                                    name="address"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Distance</label>
                                <input 
                                    type="text"
                                    placeholder="500"
                                    name="distance"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Title</label>
                                <input 
                                    type="text"
                                    placeholder="title"
                                    name="title"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Desc</label>
                                <input 
                                    type="text"
                                    placeholder="desc"
                                    name="desc"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>CheapestPrice</label>
                                <input 
                                    type="text"
                                    placeholder="100"
                                    name="cheapestPrice"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Featured</label>
                                <select id="featured" name="featured" onChange={handleChange}>
                                    <option value={false}>No</option>
                                    <option value={true}>Yes</option>
                                </select>
                            </div>
                            <div className="selectRooms">
                                <select id="rooms" multiple onChange={handleSelect}>
                                    { loading 
                                        ? "loading" 
                                        : data.map((room) => (
                                            <option key={room._id} value={room._id}>
                                                { room.title }
                                            </option>
                                        )) }
                                </select>
                            </div>
                            
            
                            {/* {inputs.map((input) => (
                            <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder} />
                            </div>
                            ))} */}
                            <button onClick={handleSubmit('success')}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewHotel