import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const RideOptionsCard = () => {

    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity onPress={()}  style={tw`absolute top-3 left-5 p-3 rounded-full`}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw` text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});