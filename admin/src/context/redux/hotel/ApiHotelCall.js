import { 
    getHotelStart,
    getHotelSuccess,
    getHotelFailure,
    createHotelStart,
    createHotelSuccess,
    createHotelFailure,
} from "./HotelRedux";
import axios from "axios";

export const getHotel = async (dispatch) => {
    dispatch(getHotelStart());
    try {
        const res = await axios.get("/hotels");
        dispatch(getHotelSuccess(res.data));
    } catch (error) {
        dispatch(getHotelFailure());
    }
};

export const createHotel = async (dispatch, hotel) => {
    dispatch(createHotelStart());
    try {
        const res = await axios.post("/hotels/", hotel);
        dispatch(createHotelSuccess(res.data));
    } catch (error) {
        dispatch(createHotelFailure());
    }
};