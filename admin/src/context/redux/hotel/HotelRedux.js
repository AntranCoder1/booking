import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
    name: "hotels",
    initialState: {
        hotels: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET HOTEL
        getHotelStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getHotelSuccess: (state, action) => {
            state.isFetching = false;
            state.hotels = action.payload;
        },
        getHotelFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        // CREATE HOTEL
        createHotelStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        createHotelSuccess: (state, action) => {
            state.isFetching = false;
            state.hotels.push(action.payload);
        },
        createHotelFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { 
    getHotelStart,
    getHotelSuccess,
    getHotelFailure,
    createHotelStart,
    createHotelSuccess,
    createHotelFailure
} = hotelSlice.actions;

export default hotelSlice.reducer;