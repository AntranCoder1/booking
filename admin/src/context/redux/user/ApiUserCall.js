import { getUserStart, getUserSuccess, getUserFailure } from './UserRedux';
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