import React, { useEffect, useState } from 'react';
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { roomInputs } from "../../formSource";
import { getHotel } from "../../context/redux/hotel/ApiHotelCall";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';

const NewRoom = () => {

    const [info, setInfo] = useState({});
    const [hotelId, setHotelId] = useState(undefined);
    const [rooms, setRooms] = useState([]);

    const hotel = useSelector(state => state.hotels.hotels);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        getHotel(dispatch);
    }, [dispatch]);

    const handleChange = (e) => {
        const value = e.target.value;
        setInfo({ ...info, [e.target.name]: value });
    };

    const handleSubmit = (variant) => async (e) => {
        e.preventDefault();
        const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
        try {
            await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers });
            enqueueSnackbar('The hotel has been added list!', { variant });
            navigate("/rooms");
        } catch (err) {
          console.log(err);
        }
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New Room</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            {roomInputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input
                                    name={input.name}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    onChange={handleChange}
                                />
                                </div>
                            ))}
                            <div className="formInput">
                                <label>Rooms</label>
                                <textarea
                                    onChange={(e) => setRooms(e.target.value)}
                                    placeholder="give comma between room numbers."
                                />
                            </div>
                            <div className="formInput">
                                <label>Choose a hotel</label>
                                <select
                                    id="hotelId"
                                    onChange={(e) => setHotelId(e.target.value)}
                                >
                                    { hotel.map((item) => (
                                        <option key={item._id} value={item._id}>{item.name}</option>
                                    )) }
                                </select>
                            </div>
                            <button onClick={handleSubmit('success')}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewRoom