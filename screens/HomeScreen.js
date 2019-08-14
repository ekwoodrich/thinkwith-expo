import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NoteViewer from "../components/NoteViewer";
import { thinkorange, thinkblack } from "../defs/thinkcolor";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import NewNote from "../components/NewNote";
import moment from "moment";

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
    console.log("param", this.props.navigation.getParam("day", "no date"));
    const day = this.props.navigation.getParam(
      "day",
      moment().format("YYYY-MM-DD")
    );

    return (
      <>
        <NoteViewer day={day} />
        <NewNote
          day={day}
          onPress={() => this.props.navigation.navigate("NewNote")}
        />
      </>
    );
  }
}

export default HomeScreen;
