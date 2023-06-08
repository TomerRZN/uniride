import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
    HomeIcon as HomeIconOutLined,
    UserIcon as UserIconOutLined,
    PlusCircleIcon as PlusCircleIconOutLined,
} from "react-native-heroicons/outline";

import { HomeIcon, UserIcon, PlusCircleIcon } from "react-native-heroicons/solid";

// Screens
import HomeScreen from "./screens/HomeScreen";
import HomeStackScreen from "./HomeStackScreen";

import ProfileScreen from "./screens/ProfileScreen";
import AddRideScreen from "./screens/AddRideScreen";

//Screen names
const homeName = "Home";
const freindsName = "Friends";

const Tab = createBottomTabNavigator();
const icon_color = "#a7c1d9";
function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let rn = route.name;

                        if (rn === homeName) {
                            if (focused) return <HomeIcon color={icon_color} />;
                            else return <HomeIconOutLined color={icon_color} />;
                        } else if (rn === "profileTab") {
                            if (focused) return <UserIcon color={icon_color} />;
                            else return <UserIconOutLined color={icon_color} />;
                        } else if (rn === "addRideTab") {
                            if (focused) return <PlusCircleIcon color={icon_color} />;
                            else return <PlusCircleIconOutLined color={icon_color} />;
                        }
                    },
                    tabBarActiveTintColor: "#00CCBB",
                    tabBarInactiveTintColor: "#00CCBB",
                    tabBarLabelStyle: {
                        fontSize: 16,
                    },
                    tabBarStyle: [
                        {
                            height: 90,
                            displaiy: "flex",
                        },
                        null,
                    ],
                    tabBarShowLabel: false,
                })}
            >
                <Tab.Screen name={"Home"} component={HomeStackScreen} />
                <Tab.Screen name={"addRideTab"} component={AddRideScreen} />
                <Tab.Screen name={"profileTab"} component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
