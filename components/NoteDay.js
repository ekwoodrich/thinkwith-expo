import * as React from "react";
import { View } from "react-native";
import auth from "../utils/auth";

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Appbar,
  Text
} from "react-native-paper";
import { withNavigation } from "react-navigation";

import NoteCard from "../components/NoteCard";
import NewNote from "../components/NewNote";
import Firebase from "../utils/Firebase";
import { ScrollView, RefreshControl, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";

function noNotes(props) {
  const noNote = props.noNote;
  if (noNote) {
    return <Text>No notes yet, click + to get started!</Text>;
  }
}
class NoteDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      loading: true
    };
    this._getNotes();
  }

  render() {
    <noNotes noNote={this.state.notes} />;
    const noteItems = this.state.notes.map((note, i) => (
      <NoteCard key={i} noteBody={note.body} noteCreated={note.created} />
    ));

    return (
      <View>
        <View style={styles.loading}>
          <ActivityIndicator
            animating={this.state.loading}
            size="large"
            color="#0000ff"
          />
        </View>
        <ScrollView>{noteItems}</ScrollView>
      </View>
    );
  }
  async _getNotes() {
    let that = this;
    console.log(Firebase.auth.currentUser);
    let us = await auth.getUser();
    Firebase.db
      .collection("notes")
      .where("userid", "==", us.uid)
      .onSnapshot(function(querySnapshot) {
        console.log("asdasd");
        that.setState({ loading: false });

        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots

          var index = that.state.notes.findIndex(item => item.id == doc.id);
          console.log(index);
          if (index < 0) {
            that.setState({
              notes: [
                ...that.state.notes,
                {
                  created: doc.data().created,
                  body: doc.data().note,
                  id: doc.id
                }
              ]
            });
          }
          console.log(that.state.notes);
        });
      });
  }

  componentDidMount() {}
}
const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 40,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withNavigation(NoteDay);
