import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NoteCalendar from '../components/NoteCalendar';

class CalendarScreen extends React.Component {
  render() {
    return (
        <>

        <NoteCalendar/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Calendar Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
      </>
    );
  }
}

export default CalendarScreen;