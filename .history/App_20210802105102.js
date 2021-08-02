import { Provider } from "react-redux";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Provider></Provider></Provider>
    <View style={styles.container}>
      <Text>Let's build Uber App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
