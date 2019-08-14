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
  Text,
  Headline,
  Subheading
} from "react-native-paper";
import { withNavigation } from "react-navigation";

import NoteCard from "../components/NoteCard";
import NewNote from "../components/NewNote";
import Firebase from "../utils/Firebase";
import { ScrollView, RefreshControl, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import moment from "moment";

function NoNotes(props) {
  const noNote = props.noNote;
  console.log("no notes ", props.noNote);
  if (noNote == 0) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 50
        }}
      >
        <Subheading>No notes yet, click + to get started!</Subheading>
      </View>
    );
  } else {
    return null;
  }
}
class NoteDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      loading: true,
      lastDay: this.props.day
    };
    this._getNotes();
    this.doDelete = this.doDelete.bind(this);
    this.unsubscribe = null;
  }
  componentDidMount() {
    console.log("did mount");
  }
  componentDidUpdate() {
    if (this.state.lastDay != this.props.day) {
      console.log("date changed");
      this._getNotes();
      this.setState({ lastDay: this.props.day });
    }
    console.log("did update");
    console.log(this.props.day);
  }
  render() {
    const noteItems = this.state.notes.map((note, i) => (
      <NoteCard
        key={i}
        noteBody={note.body}
        noteCreated={note.created}
        noteId={note.id}
        onDelete={this.doDelete}
      />
    ));

    return (
      <View>
        <NoNotes noNote={this.state.notes} />
        <View style={styles.loading}>
          <ActivityIndicator
            animating={this.state.loading}
            size="large"
            color="#d75400"
          />
        </View>
        <ScrollView>{noteItems}</ScrollView>
      </View>
    );
  }
  doDelete(noteId) {
    console.log("deleting: ", noteId);
    Firebase.db
      .collection("notes")
      .doc(noteId)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          doc.ref
            .delete()
            .then(function() {
              console.log("Document successfully deleted!");
            })
            .catch(function(error) {
              console.error("Error removing document: ", error);
            });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }

  async _getNotes() {
    let that = this;
    //console.log(Firebase.auth.currentUser)
    let us = await auth.getUser();
    this.unsubscribe = Firebase.db
      .collection("notes")
      .where("userid", "==", us.uid)
      .where("createdDate", "==", that.props.day)
      .onSnapshot(function(querySnapshot) {
        console.log("snapshot");
        console.log(that.props.day);
        that.setState({ loading: false });
        that.setState({ notes: [] });

        querySnapshot.forEach(function(doc) {
          that.setState({
            notes: [
              ...that.state.notes,
              {
                createdDate: doc.data().created,
                body: doc.data().note,
                id: doc.id
              }
            ]
          });
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
    top: 120,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withNavigation(NoteDay);
