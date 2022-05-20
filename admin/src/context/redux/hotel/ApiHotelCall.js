import { 
    getHotelStart,
    getHotelSuccess,
    getHotelFailure
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