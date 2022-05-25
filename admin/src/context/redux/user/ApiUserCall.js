import {
    getUserStart,
    getUserSuccess,
    getUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    createUserStart,
    createUserSuccess,
    createUserFailure,
} from "./UserRedux";
import axios from "axios";

export const getUser = async (dispatch) => {
    dispatch(getUserStart());
    try {
        const res = await axios.get("/users");
        dispatch(getUserSuccess(res.data));
    } catch (error) {
        dispatch(getUserFailure());
    }
};

export const deleteUser = async (dispatch, id) => {
    dispatch(deleteUserStart());
    try {
        await axios.delete("/users/" + id);
        dispatch(deleteUserSuccess(id));
    } catch (error) {
        dispatch(deleteUserFailure());
    }
};

export const createUser = async (dispatch, user) => {
    dispatch(createUserStart());
    try {
        const res = await axios.post("/auth/register", user);
        dispatch(createUserSuccess(res.data));
    } catch (error) {
        dispatch(createUserFailure());
    }
};