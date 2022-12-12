import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";

import { signInWithEmailAndPassword } from "@react-native-firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("You have Successfully Login to My Village popeles app");
        navigation.replace("joinvillage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Bad Cardinals Check and try agian");
      });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginBottom: 130,
          fontSize: 30,
          fontStyle: "normal",
          fontWeight: "900",
          textAlign: "center",
          color: "#6C2977",
          textShadowColor: "rgba(0, 0, 4, 4.0)",
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 2,
        }}
      >
        My Village Peoples App
      </Text>

      <Text
        style={{
          marginTop: 15,
          marginLeft: -240,
          color: "#555353",
          fontWeight: "900",
          lineHeight: 14,
          fontSize: 12,
        }}
      >
        Email
      </Text>
      <TextInput
        placeholder="simple@gmail.com "
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={false}
      />
      <Text
        style={{
          marginTop: 15,
          marginLeft: -220,
          color: "#555353",
          fontWeight: "900",
          lineHeight: 14,
          fontSize: 12,
        }}
      >
        Password
      </Text>
      <TextInput
        placeholder="************ "
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={() => login()}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text
          style={{
            color: "#555353",
            fontWeight: "900",
            marginTop: 20,
            textShadowColor: "rgba(0, 0, 4, 4.0)",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 2,
            fontSize: 18,
          }}
        >
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF   ",

    borderColor: "#555353",

    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6C2977",

    width: 200,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 130,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
  },

  input: {
    width: 300,
    height: 55,
    padding: 12,
    marginBottom: 10,
    borderRadius: 47,
    borderWidth: 1,
    marginTop: 10,
  },
});
