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

    this.state = {
      day: moment().format("MMM Do"),
      dayDiff: 0,
      spinner: false
    };
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
    this.setState({ dayDiff: this.state.dayDiff + 1 });
    this.setState({
      day: moment()
        .subtract(this.state.dayDiff, "days")
        .calendar()
    });
  };
  onCalNext = () => {
    console.log("on cal next");
    this.setState({ dayDiff: this.state.dayDiff - 1 });
    this.setState({
      day: moment()
        .subtract(this.state.dayDiff, "days")
        .calendar()
    });
  };
}

export default withNavigation(NoteViewer);
