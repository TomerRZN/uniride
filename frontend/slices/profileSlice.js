import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial State
const initialState = {
    profile_data: {
        id: "1",
        name: "Tomer Mccregor",
        location: "Ra'anana",
        distance: "0.8 km",
        event_time: "12:20",
        seats: "2",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        passengers: ["4", "1", "5"], // list ids
        history_rides_id: ["6", "5", "4"],
        to_uni: false,
        price: "4.70",
        description: "",
    },
};

// Slice to store Origin, Destination and calculated Travel Time reducers
export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile_data = action.payload;
        },
    },
});

export const { setProfile } = profileSlice.actions;

//Selectors
export const selectProfile = (state) => state.profile.profile_data;

export default profileSlice.reducer;
