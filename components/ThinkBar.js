import * as React from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Appbar
} from "react-native-paper";
import { withNavigation } from "react-navigation";
import { StyleSheet } from "react-native";

class ThinkBar extends React.Component {
  render() {
    return (
      <Appbar.Header style={styles.bar} dark={false}>
        <Appbar.Action icon="chevron-left" onPress={this.props.onPrev} />
        <Appbar.Content
          title={this.props.day}
          subtitle="Today"
          onPress={() => this.props.navigation.navigate("Calendar")}
        />
        <Appbar.Action
          icon="account-circle"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
        <Appbar.Action icon="chevron-right" onPress={this.props.onNext} />
      </Appbar.Header>
    );
  }
}
const styles = StyleSheet.create({
  bar: {
    backgroundColor: "white"
  }
});

export default withNavigation(ThinkBar);
