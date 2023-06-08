import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import FilterItem from "./FilterItem";
const filters = [
  {
    id: "1",
    name: "Date",
  },
  {
    id: "2",
    name: "Range",
  },
];

export default function FilterBox() {
  return (
    // <FlatList
    //   data={filters}
    //   keyExtractor={(item) => item.id}
    //   horizontal
    //   renderItem={({ item }) => <FilterItem item={item} />}
    // />
    <View className="flex-row mx-2">
      {filters.map((item) => (
        <FilterItem item={item} />
      ))}
    </View>
  );
}
