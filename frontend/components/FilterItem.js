import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
export default function FilterItem({ item, onSelect, isSelected }) {
    return (
        <TouchableOpacity onPress={() => onSelect(item.id)} className="w-50 p-2">
            {isSelected ? (
                <View className="flex-row items-center bg-slate-600 p-2 rounded-xl px-4">
                    <Text className="text-md font-semibold text-white">
                        {item.name}
                    </Text>
                </View>
            ) : (
                <View className="flex-row items-center bg-slate-400 p-2 rounded-xl px-4">
                    <Text className="text-md font-semibold text-white">
                        {item.name}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
}
