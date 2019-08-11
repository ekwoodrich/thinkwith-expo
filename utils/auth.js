import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet
} from "react-native";

import Firebase from "./Firebase";

class Auth {
  async loginUser(user) {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async logoutUser() {
    try {
      Firebase.auth.signOut();
      console.log("logging out");
      await AsyncStorage.removeItem("userData");
      return true;
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async getUser(user) {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      return JSON.parse(userData);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
}

auth = new Auth();

export default auth;
