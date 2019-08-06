import React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NoteCard from '../components/NoteCard';
import NewNote from '../components/NewNote';
import { thinkorange, thinkblack} from '../defs/thinkcolor';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet
} from 'react-native';
import { Divider, TextInput, Text } from 'react-native-paper';
import firebase  from '../utils/firebase';
import { ToastAndroid } from 'react-native';


class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };
  state = {
      email : '',
      password : '',
      visible : false
  }

  render() {
    return (
      <View>

        <TextInput
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            mode='outlined'
        />
        <TextInput
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            mode='outlined'
            secureTextEntry={true}
        />
 

        <Button title="Sign in" onPress={this._signInAsync} />
        <Divider 
            inset = {true}
        />


        <Button title="Create Account"  onPress={() => this.props.navigation.navigate('NewAccount')} />
           

      </View>
    );
  }

  _signInAsync = async () => {
    const nav = this.props.navigation;
    const thisState = this.state;
    
    await AsyncStorage.setItem('userToken', 'abc');
    console.log(firebase.auth().currentUser);
    console.log(this.state.email);
    console.log(this.state.password);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        console.log(error); 
        ToastAndroid.show('Invalid email or password.', ToastAndroid.SHORT);

    
    });
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            nav.navigate('Home');
        } else {
            console.log("failed");
        }
    });


    //this.props.navigation.navigate('App');
  };
}


export default LoginScreen;