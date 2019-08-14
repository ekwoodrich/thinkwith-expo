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
    console.log("day prop", this.props.day);
    this.state = {
      spinner: false
    };
  }

  render() {
    const day = this.props.day ? this.props.day : moment().format("YYYY-MM-DD");
    console.log("ternary day", day);
    console.log(day);
    return (
      <>
        <ThinkBar day={day} onPrev={this.onCalPrev} onNext={this.onCalNext} />

        <NoteDay day={day} />
      </>
    );
  }
  onCalPrev = () => {
    console.log("on cal prev");
    this.setState({
      day: moment(this.state.day, "YYYY-MM-DD")
        .subtract(1, "day")
        .format("YYYY-MM-DD")
    });
  };
  onCalNext = () => {
    console.log("on cal next");
    this.setState({
      day: moment(this.state.day, "YYYY-MM-DD")
        .add(1, "day")
        .format("YYYY-MM-DD")
    });
  };
}

export default withNavigation(NoteViewer);
