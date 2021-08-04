import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const RideOptionsCard = () => {


  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View >
        <TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded`}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw` text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
