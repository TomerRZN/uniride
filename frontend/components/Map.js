import { View, Text, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentRide } from "../slices/currentRideSlice";
import { selectRideList } from "../slices/rideListSlice";
export default function Map() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const ride_list = useSelector(selectRideList);
    const handlePress = (id) => {
        const item = ride_list.find((item) => item.id == id);
        dispatch(setCurrentRide(item));
        navigation.navigate("RideScreen");
    };
    return (
        <MapView
            className="h-full w-full"
            mapType="mutedStandard"
            initialRegion={{
                latitude: 32.08752718120532,
                longitude: 34.786244082396195,
                latitudeDelta: 0.1,
                longitudeDelta: 0.005,
            }}
        >
            <Marker
                coordinate={{
                    latitude: 32.08752718120532,
                    longitude: 34.786244082396195,
                }}
                onPress={handlePress.bind(this, 3)}
            >
                <Image
                    style={{
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderColor: "#00000",
                        borderRadius: 4,
                    }}
                    source={{ uri: ride_list[0].image }}
                />
            </Marker>

            <Marker
                coordinate={{
                    latitude: 32.09443665418317,
                    longitude: 34.7917583037914,
                }}
                onPress={handlePress.bind(this, 2)}
            >
                <Image
                    className="rounded-full h-14 w-14 border-2 border-spacing-1 border-[#ffffff] "
                    source={{ uri: ride_list[1].image }}
                />
            </Marker>
            {/* <Marker
                coordinate={{
                    latitude: 32.08129831603415,
                    longitude: 34.77223569138488,
                }}
                onPress={handlePress.bind(this, 3)}
            >
                <Image
                    className="rounded-full h-14 w-14 border-spacing-1 border-[#ffffff] border-2"
                    source={{ uri: ride_list[2].image }}
                />
            </Marker> */}
        </MapView>
    );
}
