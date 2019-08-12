import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NoteCard from "../components/NoteCard";
import NewNote from "../components/NewNote";
import { thinkorange, thinkblack } from "../defs/thinkcolor";
import { TextInput } from "react-native-paper";
import Firebase from "../utils/Firebase";
import { ToastAndroid } from "react-native";
import auth from "../utils/auth";

class CreateAccountScreen extends React.Component {
  static navigationOptions = {
    title: "Create an account"
  };
  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <View>
        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          mode="outlined"
        />
        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          mode="outlined"
          secureTextEntry={true}
        />

        <Button title="Create Account" onPress={this._createAccountAsync} />
      </View>
    );
  }

  _createAccountAsync = async () => {
    const nav = this.props.navigation;
    const thisState = this.state;

    Firebase.auth
      .setPersistence("local")
      .then(function() {
        console.log("persistence set");
        Firebase.auth
          .createUserWithEmailAndPassword(thisState.email, thisState.password)
          .catch(function(error) {
            console.log(error);
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
          });
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });

    Firebase.auth.onAuthStateChanged(function(user) {
      if (user) {
        auth.loginUser(Firebase.auth.currentUser);
        nav.navigate("Home");
      }
    });
  };
}

export default CreateAccountScreen;
