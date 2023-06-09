import React from "react";

import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Button,
} from "react-native";
import { useSelector } from "react-redux";
import { selectCurrentRide } from "../../slices/currentRideSlice";

import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import ParticipantsList from "../../components/ParticipantsList";
import { selectProfile } from "../../slices/profileSlice";
import MyButton from "../../components/MyButton";
import InputField from "../../components/InputField";
import SearchNav from "../../components/SearchNav";
import FilterBox from "../../components/FilterBox";

function AddRideScreen(props) {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="flex-col pt-10 bg-white p-3 h-full">
            {/* Nav - Go back  */}
            <View className="flex-row justify-between gap-2 mt-5 pb-3 mx-2">
                <View className="flex-row items-center">
                    <TouchableOpacity
                        className="mr-4"
                        onPress={() => navigation.goBack()}
                    >
                        <ArrowLeftIcon color="black" size={25} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Title */}
            <View className="flex-col items-center justify-start pb-3">
                <Text className="font-bold text-3xl uppercase">Add New Ride</Text>
            </View>

            {/* Description */}
            <View className=" pt-4  mx-3 rounded-xl">
                {/* <View className="flex-col  items-start mx-4">
                    <Text className="text-xl">Notes:</Text>
                    <Text className="pt-1 pb-4">I'm plannin to bla bla bla </Text>
                </View> */}
                <SearchNav />
                <View className="mx-2 py-2">
                    <Text className="ml-2">Choose Date:</Text>
                    <FilterBox />
                </View>

                <InputField label={"Time"} placeholder="00:00" />
                <View className="flex-row justify-between space-x-2 pb-2 mb-3 bg-gray-100 mx-4 p-4 rounded-xl">
                    <View className="flex-row items-start justify-center">
                        <Text className="mr-3 pt-1">Notes</Text>

                        <TextInput
                            placeholder="Enter here..."
                            multiline
                            numberOfLines={3}
                            className=" h-48"
                        />
                    </View>
                </View>
            </View>

            {/* Button */}

            <MyButton navigation={navigation} title="Add Ride" isCancel={false} />
        </SafeAreaView>
    );
}

export default AddRideScreen;
