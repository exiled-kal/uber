import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const RideOptionsCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
      <Touchable
          <Text style={tw` text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
