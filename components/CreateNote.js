import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { withNavigation } from "react-navigation";
import { TextInput } from "react-native-paper";
import { Button, View, Text } from "react-native";
import Firebase from "../utils/Firebase";
import moment from "moment";

class CreateNote extends React.Component {
  state = {
    text: ""
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.write}
          label="Write something!"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          multiline={true}
        />

        <Button title="Submit" onPress={this._onSubmit} />
      </View>
    );
  }
  _onSubmit = () => {
    let that = this;
    console.log(this.state.text);
    console.log(Firebase.auth.currentUser.uid);
    let submitDate = new Date();

    Firebase.db
      .collection("notes")
      .add({
        userid: Firebase.auth.currentUser.uid,
        note: this.state.text,
        createdIso: submitDate.toISOString(),
        createdDate: moment().format("YYYY-MM-DD"),
        createdTime: moment().format("HH:mm:ss")
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        that.props.navigation.navigate("Home");
      });
  };
}
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  },
  write: {
    height: 200
  }
});

export default withNavigation(CreateNote);
