import { createSlice } from '@reduxjs/toolkit';

export const hotelSlice = createSlice({
    name: "hotels",
    initialState: {
        hotels: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // GET HOTELS
        getHotelStart: (state) => {
            state.isFetching = true;
            state.error =  false;
        },
        getHotelSuccess: (state, action) => {
            state.isFetching = false;
            state.hotels = action.payload;
        },
        getHotelFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { 
    getHotelStart,
    getHotelSuccess,
    getHotelFailure
} = hotelSlice.actions;

export default hotelSlice.reducer;