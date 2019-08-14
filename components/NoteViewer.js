import * as React from "react";
import { View, Text } from "react-native";

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Appbar
} from "react-native-paper";
import { withNavigation } from "react-navigation";

import NoteCard from "../components/NoteCard";
import ThinkBar from "../components/ThinkBar";
import NoteDay from "../components/NoteDay";
import NewNote from "../components/NewNote";
import moment from "moment";

class NoteViewer extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.day) {
    }
    this.lastDay = moment().format("YYYY-MM-DD");

    this.state = {
      day: moment().format("YYYY-MM-DD"),
      spinner: false
    };
  }

  componentDidUpdate() {
    let dayParam = this.props.navigation.getParam("day", this.state.day);
    console.log("daypayam", dayParam);
    if (dayParam != this.state.day) {
      this.setState({ day: dayParam });
    }
  }

  render() {
    return (
      <>
        <ThinkBar
          day={this.state.day}
          onPrev={this.onCalPrev}
          onNext={this.onCalNext}
        />

        <NoteDay day={this.state.day} />
      </>
    );
  }
  onCalPrev = () => {
    console.log("on cal prev");
    let calPrev = moment(this.state.day, "YYYY-MM-DD")
      .subtract(1, "day")
      .format("YYYY-MM-DD");
    this.props.navigation.navigate("Home", {
      day: calPrev
    });
  };
  onCalNext = () => {
    console.log("on cal next");
    let calNext = moment(this.state.day, "YYYY-MM-DD")
      .add(1, "day")
      .format("YYYY-MM-DD");
    this.props.navigation.navigate("Home", {
      day: calNext
    });
  };
}

export default withNavigation(NoteViewer);
