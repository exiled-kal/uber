import React from "react";
import { StyleSheet, Text, View, SafeView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeTextView>
      <Text>I am the Home Screen</Text>
    </SafeTextView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
