import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NoteCard from '../components/NoteCard';
import NewNote from '../components/NewNote';
import { thinkorange, thinkblack} from '../defs/thinkcolor';
import { TextInput } from 'react-native-paper';

class NewAccountScreen extends React.Component {

  static navigationOptions = {
    title: 'Create an account',
  };
state = {
    text: '',
    password: ''
  };
  render() {


    return (
      <View>
        <Text>New Account Screen</Text>
        <TextInput
            label='Email'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            mode='outlined'
        />
        <TextInput
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            mode='outlined'
            secureTextEntry={true}
        />

        <Button
          title="Create Account"
          onPress={this._createAccount}
        />

      </View>
    );
  }
  _createAccount = () => {
      console.log('create account');
    this.props.navigation.navigate('App');
  };
}

export default NewAccountScreen;