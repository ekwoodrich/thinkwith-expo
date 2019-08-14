import React from "react";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import { Text, StyleSheet, ScrollView, View } from "react-native";
import { withNavigation } from "react-navigation";

const NoteCalendar = ({ navigation }) => (
  <Calendar
    style={styles.calendar}
    hideExtraDays
    onDayPress={day => {
      console.log("selected day", day.dateString);
      navigation.navigate("Home", {
        day: day.dateString
      });
    }}
  />
);

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    height: 350
  },
  text: {
    textAlign: "center",
    borderColor: "#bbb",
    padding: 10,
    backgroundColor: "#eee"
  },
  container: {
    flex: 1,
    backgroundColor: "gray"
  }
});

export default withNavigation(NoteCalendar);
