import { 
    getUserStart, 
    getUserSuccess, 
    getUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure
} from './UserRedux';
import axios from 'axios';

export const getUser = async (dispatch, user) => {
    dispatch(getUserStart());
    try {
        const res = await axios.get("/users/", user);
        dispatch(getUserSuccess(res.data));
    } catch (error) {
        dispatch(getUserFailure());
    }
}

export const deleteUser = async (dispatch, id) => {
    dispatch(deleteUserStart());
    try {
        await axios.delete("/users/" + id);
        dispatch(deleteUserSuccess(id));
    } catch (error) {
        dispatch(deleteUserFailure());
    }
}