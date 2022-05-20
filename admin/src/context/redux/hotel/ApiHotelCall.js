import { 
    getHotelStart,
    getHotelSuccess,
    getHotelFailure,
    deleteHotelStart,
    deleteHotelSuccess,
    deleteHotelFailure
} from './HotelRedux';
import axios from 'axios';

export const getHotels = async (dispatch, hotel) => {
    dispatch(getHotelStart());
    try {
        const res = await axios.get("/hotels", hotel);
        dispatch(getHotelSuccess(res.data));
    } catch (error) {
        dispatch(getHotelFailure());
    }
};

export const deleteHotel = async (dispatch, id) => {
    dispatch(deleteHotelStart());
    try {
        await axios.delete("/hotels/" + id);
        dispatch(deleteHotelSuccess(id));
    } catch (error) {
        dispatch(deleteHotelFailure());
    }
};