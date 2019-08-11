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
  _getNotes() {}
}

export default withNavigation(NoteDay);
