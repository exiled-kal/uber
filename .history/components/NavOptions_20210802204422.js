import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View>
              <Image
              source={{uri: item.}}

              />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
