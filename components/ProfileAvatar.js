import * as React from "react";
import { Avatar } from "react-native-paper";

const ProfileAvatar = () => (
  <Avatar.Icon
    size={120}
    icon="account-circle"
    color="white"
    style={{ backgroundColor: "#ed6b18" }}
  />
);

export default ProfileAvatar;
