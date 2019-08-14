import React from "react";
import { Button, View, Text, AsyncStorage } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileAvatar from "../components/ProfileAvatar";
import auth from "../utils/auth";

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this._getUserInfoAsync();

    this.state = {
      email: ""
    };
  }
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
        <Text>{this.state.email}</Text>
        <Button
          mode="text"
          title="Log out"
          color="#ed6b18"
          onPress={this._signOutAsync}
        />
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
  _getUserInfoAsync = async () => {
    let userInfo = await auth.getUser();
    this.setState({ email: userInfo.email });
    console.log(userInfo.email);
  };
}

export default ProfileScreen;
