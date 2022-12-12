import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/components/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

import SignupScreen from "./src/components/SignupScreen";
import WelcomeVill from "./src/components/WelcomeVill";
import JoinVillage from "./src/components/JoinVillage";
import OverVillage from "./src/components/OurVillage";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="joinvillage" component={JoinVillage} />
        <Stack.Screen name="welcomevillage" component={WelcomeVill} />
        <Stack.Screen name="ourVillage" component={OverVillage} />
      </Stack.Navigator>
    </NavigationContainer>
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
