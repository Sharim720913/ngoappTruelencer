import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import React from "react";

const JoinVillage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          //   marginTop: -40,
          marginBottom: 80,
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
        Join Our Village
      </Text>

      <Text
        style={{
          marginTop: 15,
          marginLeft: -230,
          color: "#555353",
          fontWeight: "900",
          lineHeight: 14,
          fontSize: 14,
        }}
      >
        State
      </Text>
      <TextInput placeholder="State (Dropdown) " style={styles.input} />
      <Text
        style={{
          marginTop: 10,
          marginLeft: -220,
          color: "#555353",
          fontWeight: "900",
          lineHeight: 14,
          fontSize: 14,
        }}
      >
        Mandal
      </Text>
      <TextInput placeholder="Mandal (Dropdown) " style={styles.input} />
      <Text
        style={{
          marginTop: 15,
          marginLeft: -220,
          color: "#555353",
          fontWeight: "900",
          lineHeight: 14,
          fontSize: 14,
        }}
      >
        Village
      </Text>
      <TextInput placeholder="Village (Dropdown) " style={styles.input} />
      <Text
        style={{
          marginTop: 15,
          marginLeft: -190,
          color: "#555353",
          fontWeight: "900",
          lineHeight: 14,
          fontSize: 14,
        }}
      >
        Current Stay
      </Text>
      <TextInput placeholder="Ex (In Witch Country) " style={styles.input} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("welcomevillage")}
      >
        <Text style={styles.text}>Join Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinVillage;

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
    height: 55,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
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
