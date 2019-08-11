import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NoteCard from "../components/NoteCard";
import NewNote from "../components/NewNote";
import CreateNote from "../components/CreateNote";
import { thinkorange, thinkblack } from "../defs/thinkcolor";
import { TextInput } from "react-native-paper";

class NewNoteScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Write something!</Text>
        <CreateNote />
      </View>
    );
  }
}

export default NewNoteScreen;
