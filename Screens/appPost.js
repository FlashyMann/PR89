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
  TextInput,
  Dimensions,
  TextInputComponent,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class CreateStory extends Component {
    async addPost() {
        if (
            this.state.caption
        ) {
        let postData = {
            preview_image: this.state.previewImage,
            caption: this.state.caption,
            author: firebase.auth().currentUser.displayNane,
            created_on: new Date(),
            author_uid: firebase.auth().currentuser.uid,
            profile_image: this.state.profile_image,
            likes: 0
    
        };
    await firebase
    .database()
    .ref (
        "/posts/" +
        Math.random()
        .toString (36)
        .slice(2)
    )
    .set(postData)
    .then(function (snapshot) { });
    this.props.setUpdateToTrue();
    this.props.navigation.navigate("Feed");
    } 
    else {
    Alert.alert(
    "Error",
    "All fields are require!",
    [{ text: "OK", onPres:()=> console.log("0K Pressed") }],
    { cancelable: false }
    );
    }
    }
}