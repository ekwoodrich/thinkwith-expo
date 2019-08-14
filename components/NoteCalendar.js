import React from "react";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import { Text, StyleSheet, ScrollView, View } from "react-native";
import { withNavigation } from "react-navigation";
import { useState, useEffect } from "react";
import Firebase from "../utils/Firebase";
import auth from "../utils/auth";

const NoteCalendar = ({ navigation }) => {
  const [markedDates, setMarkedDates] = useState({});

  const arrayToObject = (array, keyField) =>
    array.reduce((obj, item) => {
      obj[item[keyField]] = item;
      return obj;
    }, {});

  async function getMarkedDates() {
    {
      let us = await auth.getUser();
      Firebase.db
        .collection("notes")
        .where("userid", "==", us.uid)
        .get()
        .then(function(querySnapshot) {
          console.log("cal snapshot");
          let marked = {};
          querySnapshot.forEach(function(doc) {
            marked = {
              ...marked,
              [doc.data().createdDate]: { marked: true, dotColor: "#ed6b18" }
            };
          });
          console.log(marked);
          setMarkedDates(marked);
        });
    }
  }
  useEffect(() => {
    getMarkedDates();
    console.log(markedDates);
  }, [Firebase, auth]);

  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedDates}
      onDayPress={day => {
        console.log("selected day", day.dateString);
        navigation.navigate("Home", {
          day: day.dateString
        });
      }}
    />
  );
};

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
