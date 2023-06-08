import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreateStory extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Profile</Text>
            </View>
        )
    }
}

toggleSwitch() {
  const previous_state = this.state.isEnabled;
  const theme = !this.state.isEnabled ? "dark" : "light";
  var updates = {};
  updates[
    "/users/" + firebase.auth().currentUser.uid + "/current_theme"
  ] = theme;
  firebase
    .database()
    .ref()
    .update(updates);
  this.setState({ isEnabled: !previous_state, light_theme: previous_state });
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.85
    }
  });