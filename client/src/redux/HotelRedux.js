import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
    name: "hotels",
    initialState: {
        hotels: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        getHotelStart: (state) => {
            state.isFetching = true;
        },
        getHotelSuccess: (state, action) => { 
            state.isFetching = false;
            state.hotels = action.payload;
        },
        getHotelFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { getHotelStart, getHotelSuccess, getHotelFailure } = hotelSlice.actions;

export default hotelSlice.reducer;