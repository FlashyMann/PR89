import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class StoryCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        light_theme: true,
        post_id: this.props.post.key,
        post_data: this.props.post.value,
      };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                            ></Image>
                        </View>
                        <View styles={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                        <View style={styles.actionContainer}>
                            <View style={styles.likeButton}>
                                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                                <Text style={styles.likeText}>12k</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )                         
    }
}