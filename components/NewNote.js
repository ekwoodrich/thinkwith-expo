import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

class NewNote extends React.Component {
  render() {
    return (
      <FAB
    style={styles.fab}
    icon="add"
   onPress={() => this.props.navigation.navigate('NewNote')}
  />
    )
  }
}
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  },
});

export default withNavigation(NewNote);
