import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"
import { Provider as PaperProvider } from 'react-native-paper';



const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
Profile: {
    screen: ProfileScreen
  }
});


const AppContainer = createAppContainer(AppNavigator);

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
