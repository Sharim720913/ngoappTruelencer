import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome{"\n"} My Village {"\n"} Peoples App{" "}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("joinvillage")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF   ",
    borderRadius: 25,
    borderColor: "#555353",

    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    // fontStyle: "normal",
    fontWeight: "900",
    textAlign: "center",
    color: "#6C2977",
    textShadowColor: "rgba(0, 0, 4, 4.0)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});
