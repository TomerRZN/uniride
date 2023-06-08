import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import FilterItem from "./FilterItem";
const filters = [
    {
        id: "1",
        name: "Today",
    },
    {
        id: "2",
        name: "Tomorrow",
    },
    {
        id: "3",
        name: "12/6",
    },
    {
        id: "4",
        name: "13/6",
    },
    {
        id: "6",
        name: "14/6",
    },
];

export default function FilterBox() {
    return (
        <FlatList
            data={filters}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity className="">
                    <FilterItem key={item.id} item={item} />
                </TouchableOpacity>
            )}
        />
    );
}
