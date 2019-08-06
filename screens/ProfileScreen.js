import React from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ProfileAvatar from '../components/ProfileAvatar';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ProfileAvatar/>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button title="Log out" onPress={this._signOutAsync} />

      </View>
    );
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

}

export default ProfileScreen;