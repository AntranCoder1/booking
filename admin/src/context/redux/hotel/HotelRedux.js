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

        // DELETE USER
        deleteHotelStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteHotelSuccess: (state, action) => {
            state.isFetching = false;
            state.hotels.slice(
                state.hotels.findIndex((item) => item._id === action.payload), 1
            )
        },
        deleteHotelFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { 
    getHotelStart,
    getHotelSuccess,
    getHotelFailure,
    deleteHotelStart,
    deleteHotelSuccess,
    deleteHotelFailure
} = hotelSlice.actions;

export default hotelSlice.reducer;