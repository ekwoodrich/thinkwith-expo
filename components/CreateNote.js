import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { withNavigation } from "react-navigation";
import { TextInput } from "react-native-paper";
import { Button, View, Text } from "react-native";
import Firebase from "../utils/Firebase";

class CreateNote extends React.Component {
  state = {
    text: ""
  };

  render() {
    return (
      <>
        <TextInput
          label="Email"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />

        <Button title="Submit" onPress={this._onSubmit} />
      </>
    );
  }
  _onSubmit = () => {
    console.log(this.state.text);
    console.log(Firebase.db);
  };
}
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});

export default withNavigation(CreateNote);
