import { StyleSheet, Text, View, TextInput } from "react-native";
import React,{useState} from "react";

import UserInput from "../components/auth/UserInput";

export default function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, textAlign: "center" , color: "#333"}}>Sign Up</Text>
      <UserInput name= "NAME" value = {name} setValue = {setName} />
      <UserInput name= "EMAIL" value = {email} setValue = {setEmail}/>
      <UserInput name= "PASSWORD" value = {password} setValue = {setPassword}/>

      <Text>{JSON.stringify({name,email,password},null,4)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
