import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Subheading
} from "react-native-paper";

class NoteCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Paragraph>{this.props.noteBody}</Paragraph>
          <Paragraph>{this.props.noteCreated}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={this.props.onDelete}>Delete</Button>
        </Card.Actions>
      </Card>
    );
  }
}

export default NoteCard;
