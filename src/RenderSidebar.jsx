import React, { Component } from "react";
import TimeTrack from "./TimeTrack";
import RenderWeek from "./RenderWeek";

class RenderSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="time-boxes">
        <TimeTrack />
        <RenderWeek />
      </section>
    );
  }
}

export default RenderSidebar;
