import React, { useContext, useState } from 'react';
import "./Reserve.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import UseFetch from '../../hook/UseFetch';
import { SearchContext } from '../../redux/context/SearchContext';
import axios from 'axios';

const Reserve = ({ setOpen, hotelId }) => {

    const { data, loading, error } = UseFetch(`/hotels/room/${hotelId}`);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const { dates } = useContext(SearchContext);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        const date = new Date(start.getTime());
    
        const dates = [];
    
        while (date <= end) {
          dates.push(new Date(date).getTime());
          date.setDate(date.getDate() + 1);
        }
    
        return dates;
    };

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) => 
            alldates.includes(new Date(date).getTime())
        );

        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(checked 
            ? [...selectedRooms, value] 
            : selectedRooms.filter((item) => item !== value))
    };

    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`/rooms/availability/${roomId}`, {
                        dates: alldates
                    });
                    return res.data;
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon 
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={() => setOpen(false)}
                />
                <span>Select your rooms:</span>
                { data.map(item => (
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>
                            <div className="rDesc">{item.desc}</div>
                            <div className="rMax">
                                Max people: <b>{item.maxPeople}</b>
                            </div>
                            <div className="rPrice">{item.price}</div>
                        </div>
                        <div className="rSelectRooms">
                            { item.roomNumbers.map(item => (
                                <div className="room">
                                    <label>{item.number}</label>
                                    <input
                                        type="checkbox"
                                        value={item._id}
                                        onChange={handleSelect}
                                        disabled={!isAvailable(item)}
                                    />
                                </div>
                            )) }
                        </div>
                    </div>
                )) }
                <button onClick={handleClick} className="rButton">
                    Reserve Now!
                </button>
            </div>
        </div>
    )
}

export default Reserve