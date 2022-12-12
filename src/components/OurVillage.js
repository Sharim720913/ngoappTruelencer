import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Data from "./Data";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const OverVillage = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
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
          Our Village
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity style={styles.datacard}>
            <Text style={{ fontWeight: "bold" }}>Global Presence</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.datacard}>
            <Text style={{ fontWeight: "bold" }}>News</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default OverVillage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    flex: 1,
  },
  datacard: {
    // height: 140,
    paddingHorizontal: 40,
    backgroundColor: "#EDEDED",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 25,
    borderRadius: 15,
    // justifyContent: "center",
    padding: 10,
    marginBottom: 10,
    marginVertical: 10,
    // shadowColor: "0px 1px 1px rgba(0, 0, 0, 0.10);",
  },
  text: {
    // marginTop: 15,
    // marginLeft: -240,
    color: "#555353",
    fontWeight: "900",
    lineHeight: 14,
    fontSize: 15,
    marginTop: 12,
    marginLeft: 5,
  },
});
