import * as React from "react";
import { View } from "react-native";

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
class NoteDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: ["this is a note", "this is another note"]
    };
  }
  render() {
    const noteItems = this.state.notes.map(note => (
      <Card key={note.id}>
        <Card.Content>
          <Paragraph>{note}</Paragraph>
        </Card.Content>
      </Card>
    ));

    return (
      <View>
        <Text>No notes yet, click + to get started!</Text>
        {noteItems}
      </View>
    );
  }
  _getNotes() {}
}

export default withNavigation(NoteDay);
