import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, Text, View, Image, TextInput } from "react-native";

function FriendScreen(props) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: "Student Carpool",
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="pt-6 bg-white">
      <Text className="font-bold text-xl">Friends Screen</Text>
    </SafeAreaView>
  );
}

export default FriendScreen;
