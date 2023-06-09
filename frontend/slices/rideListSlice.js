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
        distance: "0.3 km",
        event_time: "12/06/2023 12:25",
        seats: "3",
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
        distance: "0.5 km",
        event_time: "14/06/2023 13:50",
        seats: "2",
        image: "https://randomuser.me/api/portraits/men/79.jpg",
        passengers: ["2", "5"], // list ids
        to_uni: false,
        price: "4.70",
        description: "",
    },
    {
        id: "3",
        name: "Daniel Yehuda",
        location: "Ra'anana",
        distance: "0.2 km",
        event_time: "15/06/2023 11:10",
        seats: "1",
        image: "https://randomuser.me/api/portraits/men/88.jpg",
        passengers: ["4", "2", "5"], // list ids
        to_uni: false,
        price: "4.70",
        description: "",
    },
    {
        id: "4",
        name: "Tomer Musk",
        location: "Ra'anana",
        distance: "0.5 km",
        event_time: "13/06/2023 10:00",
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
        location: "Herzliya",
        distance: "1.2 km",
        event_time: "21/06/2023 16:00",
        seats: "3",
        image: "https://randomuser.me/api/portraits/women/81.jpg",
        passengers: ["4", "2", "5"], // list ids
        to_uni: false,
        price: "4.70",
        description: "",
    },

    {
        id: "6",
        name: "Tony Stark",
        location: "Ra'anana",
        distance: "0.7 km",
        event_time: "14/06/2023 18:20",
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
        resetFilteredData: (state, action) => {
            state.filteredData = state.data;
        },
    },
});

export const { setFilteredData, resetFilteredData } = rideListSlice.actions;

//Selectors
export const selectRideList = (state) => state.ride_list.data;

export const selectFilteredRideList = (state) => state.ride_list.filteredData;
export default rideListSlice.reducer;
