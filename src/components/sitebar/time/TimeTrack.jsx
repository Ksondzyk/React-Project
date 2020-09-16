import React from "react";
import "./timetrack.scss";
import { getFilledArray } from "../../fillArray/getFillArray";

const TimeTrack = () => {
  return (
    <ul className="time">
      {getFilledArray(24).map((el) => (
        <li className="time-contaiter" key={el}>
          <span className="time-contaiter_text">{`${el}:00`}</span>
        </li>
      ))}
    </ul>
  );
};

export default TimeTrack;
