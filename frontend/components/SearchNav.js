import { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  ArrowsUpDownIcon,
} from "react-native-heroicons/outline";

export default function SearchNav() {
  const [atUniversity, setAtUniversity] = useState(false);
  const [destination, setDestination] = useState("");
  const handleToggle = () => {
    setAtUniversity((state) => !state);
  };

  const handleTextChange = (text) => {
    setDestination(text);
  };

  return (
    <View className="flex-row items-center">
      <View className="flex-grow">
        {/* Dest bar */}
        <View className="flex-row justify-between space-x-2 pb-2 mb-3 bg-gray-100 mx-4 p-3 rounded-xl">
          <View className="flex-row items-center">
            <Text className="mr-3">From:</Text>
            {atUniversity ? (
              <TextInput
                editable={atUniversity}
                placeholder="search destination..."
                onChangeText={handleTextChange}
              />
            ) : (
              <Text>Tel Aviv University</Text>
            )}
          </View>
          {atUniversity ? <MagnifyingGlassIcon color="grey" size={20} /> : null}
        </View>

        {/* Search bar */}
        <View className="flex-row justify-between space-x-2 pb-2 mb-3 bg-gray-100 mx-4 p-3 rounded-xl">
          <View className="flex-row items-center">
            <Text className="mr-3">To:</Text>
            {!atUniversity ? (
              <TextInput
                editable={!atUniversity}
                placeholder="search destination..."
                onChangeText={handleTextChange}
              />
            ) : (
              <Text>Tel Aviv University</Text>
            )}
          </View>
          {!atUniversity ? (
            <MagnifyingGlassIcon color="grey" size={20} />
          ) : null}
        </View>
      </View>
      <View className="mr-4">
        <TouchableOpacity onPress={handleToggle}>
          <ArrowsUpDownIcon color="grey" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
