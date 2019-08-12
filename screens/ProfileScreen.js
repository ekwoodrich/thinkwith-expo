import React from "react";
import { Button, View, Text, AsyncStorage } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileAvatar from "../components/ProfileAvatar";
import auth from "../utils/auth";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
      shadowColor: "transparent"
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ProfileAvatar />
        <Button title="Log out" onPress={this._signOutAsync} />
      </View>
    );
  }
  _signOutAsync = async () => {
    AsyncStorage.removeItem("userData");
    let loggedOut = await auth.logoutUser();
    if (loggedOut) {
      this.props.navigation.navigate("Auth");
    }
  };
}

export default ProfileScreen;
