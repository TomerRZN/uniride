import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import RideItem from "./RideItem";

import { useSelector } from "react-redux";
import { selectProfile } from "../slices/profileSlice";
import { selectRideList } from "../slices/rideListSlice";
export default function UpcomingRideList() {
    const { history_rides_id: ride_ids } = useSelector(selectProfile);
    const rides_list = useSelector(selectRideList);
    const upcoming_rides = rides_list.filter((ride) => ride_ids.includes(ride.id));
    return (
        <FlatList
            data={upcoming_rides}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <RideItem item={item} />}
        />
    );
}
