import { 
    getRoomStart,
    getRoomSuccess,
    getRoomFailure
} from "./RoomRedux";
import axios from "axios";

export const getRoom = async (dispatch) => {
    dispatch(getRoomStart());
    try {
        const res = await axios.get("/rooms");
        dispatch(getRoomSuccess(res.data));
    } catch (error) {
        dispatch(getRoomFailure());
    }
};