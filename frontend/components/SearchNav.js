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
    XMarkIcon,
    MagnifyingGlassIcon,
    ArrowsUpDownIcon,
} from "react-native-heroicons/outline";
import filter from "lodash.filter";
import { selectRideList, setFilteredData } from "../slices/rideListSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchNav() {
    const [atUniversity, setAtUniversity] = useState(false);
    const [destination, setDestination] = useState("");
    const dispatch = useDispatch();
    const rides_list = useSelector(selectRideList);
    const handleToggle = () => {
        setAtUniversity((state) => !state);
    };

    const handleSearch = (text) => {
        setDestination(text);
        const formattedQuery = text.toLowerCase();
        const filter_data_list = filter(rides_list, (drive) => {
            return contains(drive, formattedQuery);
        });

        dispatch(setFilteredData(filter_data_list));
    };

    const contains = ({ location }, query) => {
        if (location.toLowerCase().includes(query)) {
            return true;
        } else return false;
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
                                placeholder="Search source..."
                                onChangeText={handleSearch}
                                value={destination}
                            />
                        ) : (
                            <Text>Tel Aviv University</Text>
                        )}
                    </View>
                    {atUniversity ? (
                        <TouchableOpacity
                            onPress={() => {
                                handleSearch("");
                            }}
                        >
                            <XMarkIcon color="grey" size={20} />
                        </TouchableOpacity>
                    ) : null}
                </View>

                {/* Search bar */}
                <View className="flex-row justify-between space-x-2 pb-2 mb-3 bg-gray-100 mx-4 p-3 rounded-xl">
                    <View className="flex-row items-center">
                        <Text className="mr-3">To:</Text>
                        {!atUniversity ? (
                            <TextInput
                                editable={!atUniversity}
                                placeholder="Search Destination..."
                                onChangeText={handleSearch}
                                value={destination}
                            />
                        ) : (
                            <Text>Tel Aviv University</Text>
                        )}
                    </View>
                    {!atUniversity ? (
                        <TouchableOpacity
                            onPress={() => {
                                handleSearch("");
                            }}
                        >
                            <XMarkIcon color="grey" size={20} />
                        </TouchableOpacity>
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
