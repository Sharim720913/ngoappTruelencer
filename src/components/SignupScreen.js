import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";

import React, { useState } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailLink,
// } from "firebase/auth";
// import { app } from "../../firebaseConfig";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = ({}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  let navigation = useNavigation();

  const signup = async () => {
    navigation.navigate("joinvillage");
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: "https://ngeo.page.link/finishSignUp?cartId=1234",
      // This must be true.
      handleCodeInApp: true,
      // iOS: {
      //   bundleId: "com.ngeo.sharim",
      // },
      // android: {
      //   packageName: "com.ngeo.sharim",
      //   installApp: true,
      //   minimumVersion: "12",
      // },
      // dynamicLinkDomain: "ngeo.page.link",
    };
    // let data = await auth().sendSignInLinkToEmail(
    //   "mohdhassandbg@gmail.com",
    //   actionCodeSettings
    // );
    // console.log(data);

    // let check = await auth().isSignInWithEmailLink(actionCodeSettings);
    // console.log("check", check);
    // auth()
    //   .signInWithEmailLink("mohdhassandbg@gmail.com", "ngeo.page.link")
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const actionCodeSettings = {
    //   // URL you want to redirect back to. The domain (www.example.com) for this
    //   // URL must be in the authorized domains list in the Firebase Console.
    //   url: "https://www.example.com/finishSignUp?cartId=1234",
    //   // This must be true.
    //   handleCodeInApp: true,
    //   iOS: {
    //     bundleId: "com.example.ios",
    //   },
    //   android: {
    //     packageName: "com.example.android",
    //     installApp: true,
    //     minimumVersion: "12",
    //   },
    //   dynamicLinkDomain: "example.page.link",
    // };
    // let auth = getAuth(app);
    // console.log(auth);
    // signInWithEmailLink(auth, "mohdhassandbg@gmail.com", "https://google.com")
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // let sig = await auth().signInWithEmailAndPassword(email, password);
    // let data = await auth().sendSignInLinkToEmail("mohdhassandbg@gmail.com", {
    //   handleCodeInApp: true,
    //   url: "https://ngoapp-fb630.firebaseapp.com",
    // });
    // console.log(data);
  };

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
        My Village Peoples App
      </Text>

      <Text
        style={{
          marginTop: 15,
          marginLeft: -205,
          color: "#555353",
          fontWeight: "900",
          lineHeight: 14,
          fontSize: 12,
        }}
      >
        First Name
      </Text>
      <TextInput placeholder="First Name " style={styles.input} />
      <Text
        style={{
          marginTop: 10,
          marginLeft: -140,
          color: "#555353",
          fontWeight: "900",
          lineHeight: 14,
          fontSize: 12,
        }}
      >
        Surname or Last Name
      </Text>
      <TextInput placeholder="Surname or Last Name " style={styles.input} />
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
        autoCapitalize={false}
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
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
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={() => signup()}>
        <Text style={styles.text}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            color: "#555353",
            fontWeight: "900",
            marginTop: 20,
            fontSize: 18,
            textShadowColor: "rgba(0, 0, 4, 4.0)",
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 2,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

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
