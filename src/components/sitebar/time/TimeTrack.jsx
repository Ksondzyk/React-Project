import React from "react";
import "./timetrack.scss";

const TimeTrack = () => {
  const timeContainer = new Array(24).fill(1).map((el, index) => index);
  return (
    <ul className="time">
      {timeContainer.map((el) => (
        <li className="time-contaiter" key={el}>
          <span className="time-contaiter_text">{`${el}:00`}</span>
        </li>
      ))}
    </ul>
  );
};

export default TimeTrack;
