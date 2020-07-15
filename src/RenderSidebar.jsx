import React from "react";
import TimeTrack from "./TimeTrack";
import RenderWeek from "./RenderWeek";

const RenderSidebar = ({ popup }) => {
  return (
    <section className="wrapper">
      <div className="time-boxes">
        <TimeTrack />
        <RenderWeek popup={popup} />
      </div>
    </section>
  );
};

export default RenderSidebar;
