import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NoteCard from "../components/NoteCard";
import NewNote from "../components/NewNote";
import ThinkBar from "../components/ThinkBar";
import { thinkorange, thinkblack } from "../defs/thinkcolor";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  }
});
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <>
        <ThinkBar />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>8/5/2019</Text>
          <NewNote onPress={() => this.props.navigation.navigate("NewNote")} />
        </View>
      </>
    );
  }
}

export default HomeScreen;
