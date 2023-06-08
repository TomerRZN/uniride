import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function RideItem({ item }) {
  const { id, location, distance, event_time, seats, image } = item;
  return (
    <TouchableOpacity
      // onPress={() => navigation.navigate(item.screen)}
      className="w-50 p-2"
    >
      <View className="flex-row items-center justify-between pb-3 mx-2 ">
        <View className="flex-row gap-2 items-center">
          <View className="mx-2">
            <Image
              source={{ uri: image }}
              className="h-12 w-12 rounded-full mt-2"
            />
          </View>

          <View className="flex-col">
            <Text className="text-lg font-bold">
              {location} <Text className="font-normal">{distance}</Text>
            </Text>

            <Text className="italic">{event_time}</Text>
          </View>

          <View></View>
        </View>
        <Text className="mr-4">{seats}</Text>
      </View>
    </TouchableOpacity>
  );
}
