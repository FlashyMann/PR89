import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert, 
  TouchableOpacity,
  Text
} from "react-native";

import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

export default class RegisterScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        first_name:"",
        last_name:"",
        email: "",
        password: "",
        confirmPassword: "",
        fontsLoaded: false
      };
    }
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
   
   registerUser = (email, password,confirmPassword,first_name,last_name) => {
    if(password==confirmPassword){
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          Alert.alert("User registered!!");
        })
        .catch(error => {
          Alert.alert(error.message);
        });
      }else{
        Alert.alert("Passwords don't match!");
      }
    };
}