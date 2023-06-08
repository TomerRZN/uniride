/**
    ride_id: uuid
	name: str
	location: Location
	distance: float #  dynamic
	event_time: datetime
	seats: int
	image: str
	passengers: List[Profile]
	
    
    driver_id: uuid
	to_uni: bool
	price: float
	description: str
 */

const data = [
    {
        id: "1",
        name: "Alon Moshe",
        location: "Ra'anana",
        distance: "0.8 km",
        event_time: "12:20",
        seats: "2",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        passengers: ["3", "2", "4"], // list ids
        to_uni: false,
        price: "4.70",
        description: "",
    },
    {
        id: "2",
        name: "Tomer Nudelman",
        location: "Herzliya",
        distance: "0.8 km",
        event_time: "12:20",
        seats: "2",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
        passengers: ["4", "2", "5"], // list ids
        to_uni: false,
        price: "4.70",
        description: "",
    },
    {
        id: "3",
        name: "Daniel Yehuda",
        location: "Tel Aviv",
        distance: "0.8 km",
        event_time: "12:20",
        seats: "2",
        image: "https://randomuser.me/api/portraits/men/88.jpg",
        passengers: ["4", "2", "5"], // list ids
        to_uni: false,
        price: "4.70",
        description: "",
    },
    {
        id: "4",
        name: "Tomer Musk",
        location: "Ramat Gan",
        distance: "0.8 km",
        event_time: "12:20",
        seats: "2",
        image: "https://randomuser.me/api/portraits/men/93.jpg",
        passengers: ["4", "2", "5"], // list ids
        to_uni: false,
        price: "4.70",
        description: "",
    },
    {
        id: "5",
        name: "Amit Bezus",
        location: "Rishon LeTsiyon",
        distance: "0.8 km",
        event_time: "12:20",
        seats: "2",
        image: "https://randomuser.me/api/portraits/women/81.jpg",
        passengers: ["4", "2", "5"], // list ids
        to_uni: false,
        price: "4.70",
        description: "",
    },

    {
        id: "6",
        name: "Tony Stark",
        location: "Giv'atayim",
        distance: "0.8 km",
        event_time: "12:20",
        seats: "2",
        image: "https://randomuser.me/api/portraits/women/61.jpg",
        passengers: ["4", "2", "5"], // list ids
        to_uni: false,
        price: "4.70",
        description: "",
    },
];

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial State
const initialState = {
    data: data,
    filteredData: data,
};

// Slice to store Origin, Destination and calculated Travel Time reducers
export const rideListSlice = createSlice({
    name: "ride_list",
    initialState,
    reducers: {
        setFilteredData: (state, action) => {
            state.filteredData = action.payload;
        },
    },
});

export const { setFilteredData } = rideListSlice.actions;

//Selectors
export const selectRideList = (state) => state.ride_list.data;
export const selectFilteredRideList = (state) => state.ride_list.filteredData;
export default rideListSlice.reducer;
