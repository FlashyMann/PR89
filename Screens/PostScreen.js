import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Speech from "expo-speech";
import * as Font from "expo-font";
import firebase from "firebase";

export default class StoryScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        light_theme: true,
      };
    }

    fetchUser = () => {
        let theme;
        firebase
            .database()
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value", (snapshot) => {
                theme = snapshot.val().current_theme
                this.setState({ light_theme: theme === "light" })
            })
    }
}

const styles = StyleSheet.create({
    postCardLight: {
        margin: RFValue(20),
        backgroundColor: "#eaeaea",
        borderRadius: RFValue(20)
    },
    authorNameText: {
        color: "white",
        fontSize: RFValue(20)
    },
    authorNameText: {
        color: "Black",
        fontSize: RFValue(20)
    },
})