import React from "react";
import "./day.scss";
import Minutes from "../minutes/Minutes";

const Day = ({ popup, event, currentBox }) => {
  if (currentBox) {
    console.log("roma");
  }
  const currentElement = true;
  let isEvent;
  if (event) {
    isEvent = (
      <div className={`rectangle_box_event ${currentElement ? "res" : null}`}>
        <h1 className="title">read-book</h1>
        <div className="clock-box">
          <div className="clock-box_time">15</div>
          <span className="clock-box_hyphen">-</span>
          <div className="clock-box_time">30</div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`rectangle_box ${parseInt(Math.random() * 168)}`}
      onClick={popup}
    >
      {isEvent}
      <Minutes />
    </div>
  );
};

export default Day;
