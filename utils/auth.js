import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet
} from 'react-native';



class Auth {

async loginUser(user) {
    try {
       await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async logoutUser(user) {
    try {
       await AsyncStorage.setItem("userData", "");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async getUser(user) {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      console.log(data);
      return JSON.parse(userData);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
}

auth = new Auth();

export default auth;