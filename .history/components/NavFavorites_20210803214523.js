import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },

  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavorites = () => {
  return <FlatList data={data} keyExtractor={(item) => item.id} />;
};

export default NavFavorites;

const styles = StyleSheet.create({});
