import React from "react";
import "./rendersitebar.scss";
import TimeTrack from "../time/TimeTrack";
import RenderWeek from "../renderweek/RenderWeek";

const RenderSidebar = ({ popup, event, currentBox }) => {
  return (
    <section className="wrapper">
      <div className="time-boxes">
        <TimeTrack />
        <RenderWeek popup={popup} currentBox={currentBox} event={event} />
      </div>
    </section>
  );
};

export default RenderSidebar;
