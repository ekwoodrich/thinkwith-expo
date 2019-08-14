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

    this.state = {
      day: moment().format("YYYY-MM-DD"),
      spinner: false
    };
  }

  componentDidUpdate() {
    let dayParam = this.props.navigation.getParam("day", this.state.day);
    if (dayParam != this.state.day) {
      this.setState({ day: dayParam });
    }
  }

  render() {
    const dayRelative = moment(this.state.day, "YYYY-MM-DD").calendar(null, {
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
      nextWeek: "[Next] dddd",
      lastDay: "[Yesterday]",
      lastWeek: "[Last] dddd",
      sameElse: "dddd"
    });

    return (
      <>
        <ThinkBar
          day={this.state.day}
          dayRelative={dayRelative}
          onPrev={this.onCalPrev}
          onNext={this.onCalNext}
        />

        <NoteDay day={this.state.day} />
      </>
    );
  }
  onCalPrev = () => {
    let calPrev = moment(this.state.day, "YYYY-MM-DD")
      .subtract(1, "day")
      .format("YYYY-MM-DD");
    this.props.navigation.navigate("Home", {
      day: calPrev
    });
  };
  onCalNext = () => {
    let calNext = moment(this.state.day, "YYYY-MM-DD")
      .add(1, "day")
      .format("YYYY-MM-DD");
    this.props.navigation.navigate("Home", {
      day: calNext
    });
  };
}

export default withNavigation(NoteViewer);
