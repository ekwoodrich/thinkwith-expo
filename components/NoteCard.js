import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Subheading
} from "react-native-paper";
import { StyleSheet } from "react-native";
import moment from "moment";

class NoteCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Paragraph>{this.props.noteBody}</Paragraph>
          <Paragraph style={styles.created}>{this._formatDate()}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button color="#888888" onPress={this.props.onDelete}>
            View
          </Button>
          <Button color="#888888" onPress={this.props.onDelete}>
            Delete
          </Button>
        </Card.Actions>
      </Card>
    );
  }

  _formatDate() {
    let created = moment(this.props.noteCreated).format("h:mm a");
    return created;
  }
}

const styles = StyleSheet.create({
  created: {
    color: "#A9A9A9"
  }
});

export default NoteCard;
