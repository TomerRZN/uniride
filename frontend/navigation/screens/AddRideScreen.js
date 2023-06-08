import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
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
import { selectProfile } from "../../slices/profileSlice";
import FilterItem from "../../components/FilterItem";
import {
    AcademicCapIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowTrendingUpIcon,
    CommandLineIcon,
    FireIcon,
    MapPinIcon,
    MusicalNoteIcon,
    StarIcon,
    UserIcon,
} from "react-native-heroicons/outline";

export default function AddRideScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            //   headerTitle: "Student Carpool",
            headerShown: false,
        });
    }, []);
    return (
        <View>
            <Text>AddRideScreen</Text>
        </View>
    );
}
