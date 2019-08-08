import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NoteViewer from "../components/NoteViewer";
import { thinkorange, thinkblack } from "../defs/thinkcolor";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import NewNote from "../components/NewNote";

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
        <NoteViewer />
        <NewNote onPress={() => this.props.navigation.navigate("NewNote")} />
      </>
    );
  }
}

export default HomeScreen;
