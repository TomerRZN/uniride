import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import FilterItem from "./FilterItem";
const filters = [
    {
        id: "1",
        name: "Today",
        isSelected: true,
    },
    {
        id: "2",
        name: "Tomorrow",
        isSelected: false,
    },
    {
        id: "3",
        name: "12/6",
        isSelected: false,
    },
    {
        id: "4",
        name: "13/6",
        isSelected: false,
    },
    {
        id: "6",
        name: "14/6",
        isSelected: false,
    },
];

export default function FilterBox() {
    const [idSelected, setIdSelected] = useState(1);
    return (
        <FlatList
            data={filters}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity className="">
                    <FilterItem
                        key={item.id}
                        item={item}
                        onSelect={(id) => {
                            setIdSelected(id);
                        }}
                        isSelected={item.id == idSelected}
                    />
                </TouchableOpacity>
            )}
        />
    );
}
