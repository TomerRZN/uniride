import { View, Text, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";
export default function Map() {
  const origin = useSelector(selectOrigin);
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
        title="tel aviv"
      >
        <Image
          className="rounded-full h-14 w-14 border-spacing-1 border-[#ffffff] border-2"
          source={{ uri: "https://randomuser.me/api/portraits/women/61.jpg" }}
        />
      </Marker>
    </MapView>
  );
}
