import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Welcome from "./components/Welcome";

export default function App() {
  const names = ["Mathew", "Mark", "Glo"];

  return (
    <View style={styles.container}>
      <Text>Bookmarks App</Text>

      {names.map((name) => (
        <Welcome name={name} key={name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
