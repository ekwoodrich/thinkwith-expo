import React from "react";
import { Button, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NoteCard from "../components/NoteCard";
import NewNote from "../components/NewNote";
import { thinkorange, thinkblack } from "../defs/thinkcolor";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet
} from "react-native";
import { Divider, TextInput, Text } from "react-native-paper";
import Firebase from "../utils/Firebase";
import { ToastAndroid } from "react-native";
import auth from "../utils/auth";

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };
  state = {
    email: "",
    password: "",
    visible: false
  };

  render() {
    return (
      <View>
        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          mode="outlined"
          autoCapitalize="none"
        />
        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          mode="outlined"
          secureTextEntry={true}
        />

        <Button title="Sign in" color="#ed6b18" onPress={this._signInAsync} />
        <Divider inset={true} />

        <Button
          title="Create Account"
          color="#ed6b18"
          onPress={() => this.props.navigation.navigate("CreateAccount")}
        />
      </View>
    );
  }

  _signInAsync = async () => {
    const nav = this.props.navigation;
    const thisState = this.state;

    Firebase.auth
      .setPersistence("local")
      .then(function() {
        console.log("persistence set");
        Firebase.auth
          .signInWithEmailAndPassword(thisState.email, thisState.password)
          .catch(function(error) {
            console.log(error);
            ToastAndroid.show("Invalid email or password.", ToastAndroid.SHORT);
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

export default LoginScreen;
