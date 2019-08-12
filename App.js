import "./utils/fixtimerbug"; // <<<<<<<<<<<<<<<<<<
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Provider as PaperProvider } from "react-native-paper";
import CalendarScreen from "./screens/CalendarScreen";
import NewNoteScreen from "./screens/NewNoteScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";

console.ignoredYellowBox = ["Setting a timer"];

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  },
  Calendar: {
    screen: CalendarScreen
  },
  NewNote: {
    screen: NewNoteScreen
  }
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  CreateAccount: CreateAccountScreen
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
