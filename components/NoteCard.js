import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Subheading
} from "react-native-paper";

const NoteCard = props => (
  <Card>
    <Card.Content>
      <Paragraph>{props.noteBody}</Paragraph>
      <Paragraph>{props.noteCreated}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={props.onDelete}>Delete</Button>
    </Card.Actions>
  </Card>
);

export default NoteCard;
