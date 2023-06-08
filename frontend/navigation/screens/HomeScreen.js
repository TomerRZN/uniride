import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  ArrowsUpDownIcon,
} from "react-native-heroicons/outline";

import OptionsSlider from "../../components/OptionsSlider.js";
import { selectOrigin } from "../../slices/navSlice.js";
import { useSelector } from "react-redux";
import Map from "../../components/Map.js";
import RideList from "../../components/RideList.js";
import FilterBox from "../../components/FilterBox.js";
import SearchNav from "../../components/SearchNav.js";
function HomeScreen(props) {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: "Student Carpool",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-col pt-10 bg-white p-3">
      {/* Header */}
      <View className="flex-row justify-between gap-2 pb-3 mx-2">
        <View className="flex-col">
          <Text className="text-xl font-light">UniRide</Text>
          <Text className="font-bold text-2xl">Choose a ride</Text>
        </View>
      </View>

      <SearchNav />

      <FilterBox />
      <RideList></RideList>
    </SafeAreaView>
  );
}

export default HomeScreen;
