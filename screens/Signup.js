import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import UserInput from "../components/auth/UserInput";

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, textAlign: "center" , color: "#333"}}>Sign Up</Text>
      <UserInput name= "NAME"/>
      <UserInput name= "EMAIL"/>
      <UserInput name= "PASSWORD"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
