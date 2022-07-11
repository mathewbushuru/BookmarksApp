import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function UserInput({ name }) {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text style={{ marginVertical: 12, color: "#666" }}>{name}</Text>
      <TextInput
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#8e93a1",
          marginBottom: 30,
        }}
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
