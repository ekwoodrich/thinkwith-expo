import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NoteCalendar from "../components/NoteCalendar";

class CalendarScreen extends React.Component {
  render() {
    return (
      <>
        <NoteCalendar />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        ></View>
      </>
    );
  }
}

export default CalendarScreen;
