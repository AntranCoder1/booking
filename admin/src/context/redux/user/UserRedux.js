import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET USER
        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
        },
        getUserFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },

        // DELETE USER
        deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.slice(
                state.users.findIndex((item) => item._id === action.payload), 1
            )
        },
        deleteUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { 
    getUserStart, 
    getUserSuccess, 
    getUserFailure ,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure
} = userSlice.actions;

export default userSlice.reducer;