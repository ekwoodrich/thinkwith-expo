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

import NewNote from "../components/NewNote";
import Firebase from "../utils/Firebase";

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
      notes: ["this is a note", "this is another note"]
    };
    this._getNotes();
  }
  render() {
    <noNotes noNote={this.state.notes} />;
    const noteItems = this.state.notes.map((note, i) => (
      <Card key={i}>
        <Card.Content key={i}>
          <Paragraph key={i}>{note}</Paragraph>
        </Card.Content>
      </Card>
    ));

    return <View>{noteItems}</View>;
  }
  async _getNotes() {
    console.log(Firebase.auth.currentUser);
    let us = await auth.getUser();
    Firebase.db
      .collection("notes")
      .where("userid", "==", us.uid)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }
}

export default withNavigation(NoteDay);
