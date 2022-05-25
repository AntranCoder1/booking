import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name: "rooms",
    initialState: {
        rooms: [],
        isFetching: false,
        error: false
    },
    reducers: {
        // GET ALL ROOM
        getRoomStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getRoomSuccess: (state, action) => {
            state.isFetching = false;
            state.rooms = action.payload;
        },
        getRoomFailure: (state) =>{
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { 
    getRoomStart,
    getRoomSuccess,
    getRoomFailure,
} = roomSlice.actions;

export default roomSlice.reducer;