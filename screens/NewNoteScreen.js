import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NoteCard from '../components/NoteCard';
import NewNote from '../components/NewNote';
import { thinkorange, thinkblack} from '../defs/thinkcolor';

class NewNoteScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>New Note Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go to Calendar"
          onPress={() => this.props.navigation.navigate('Calendar')}
        />
      </View>
    );
  }
}

export default NewNoteScreen;