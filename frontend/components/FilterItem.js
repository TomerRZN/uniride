import { TouchableOpacity, View, Text } from "react-native";
export default function FilterItem({ item }) {
    return (
        <TouchableOpacity
            // onPress={() => navigation.navigate(item.screen)}
            className="w-50 p-2"
        >
            <View className="flex-row items-center bg-slate-400 p-2 rounded-xl px-4">
                <Text className="text-md font-semibold text-white">{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}
