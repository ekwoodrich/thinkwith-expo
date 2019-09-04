import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { withNavigation } from "react-navigation";
import { TextInput, Subheading } from "react-native-paper";
import { Button, View, Text } from "react-native";
import Firebase from "../utils/Firebase";
import moment from "moment";
import { connect } from "react-redux";
import { addNote } from "../actions";

/*
class CreateNote extends React.Component {
  state = {
    text: ""
  };

  render() {
    console.log("profile profs", this.props.navigation.getParam("day"));
    return (
      <View>
        <TextInput
          style={styles.write}
          label="Write something!"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          multiline={true}
        />
        <TextInput
          label="Date"
          disabled={true}
          value={this.props.navigation.getParam("day")}
        />

        <Button title="Submit" color="#ed6b18" onPress={this._onSubmit} />
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
        createdDate: moment(
          this.props.navigation.getParam("day"),
          "YYYY-MM-DD"
        ).format("YYYY-MM-DD"),
        createdTime: moment(
          this.props.navigation.getParam("day"),
          "YYYY-MM-DD"
        ).format("HH:mm:ss")
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        that.props.navigation.navigate("Home"),
          {
            day: that.props.navigation.getParam("day")
          };
      });

    console.log("on submit");
  };
}
*/
const CreateNote = ({ dispatch, navigation }) => {
  let input;

  return (
    <View>
      <TextInput
        style={styles.write}
        label="Write something!"
        onChangeText={text => (input = text)}
        multiline={true}
      />
      <TextInput
        label="Date"
        disabled={true}
        value={navigation.getParam("day")}
      />

      <Button
        title="Submit"
        color="#ed6b18"
        onPress={() => {
          console.log("dispatch add note");
          dispatch(addNote(input));
          navigation.navigate("Home"),
            {
              day: navigation.getParam("day")
            };
        }}
      />
    </View>
  );
};
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

export default connect()(withNavigation(CreateNote));
