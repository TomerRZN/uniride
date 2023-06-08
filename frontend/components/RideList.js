import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import RideItem from "./RideItem";

const data = [
  {
    id: "1",
    location: "Ra'anana",
    distance: "0.8 km",
    event_time: "12:20",
    seats: "2",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "2",
    location: "Herzliya",
    distance: "0.8 km",
    event_time: "12:20",
    seats: "2",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
  },
  {
    id: "3",
    location: "Tel Aviv",
    distance: "0.8 km",
    event_time: "12:20",
    seats: "2",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    id: "4",
    location: "Ramat Gan",
    distance: "0.8 km",
    event_time: "12:20",
    seats: "2",
    image: "https://randomuser.me/api/portraits/men/93.jpg",
  },
  {
    id: "5",
    location: "Rishon LeTsiyon",
    distance: "0.8 km",
    event_time: "12:20",
    seats: "2",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    id: "6",
    location: "Giv'atayim",
    distance: "0.8 km",
    event_time: "12:20",
    seats: "2",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
  },
];

export default function RideList() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RideItem item={item} />}
    />
  );
}
