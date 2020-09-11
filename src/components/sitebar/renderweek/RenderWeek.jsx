import React from "react";
import "./renderweek.scss";
import Week from "./week/Week";

const RenderWeek = ({ popup, event, currentBox }) => {
  const arrRenderWeek = new Array(25).fill(1).map((el, index) => index);
  return (
    <div className="rectangle">
      {arrRenderWeek.map((el) => (
        <Week
          key={el}
          popup={popup}
          currentBox={currentBox}
          event={event}
          id={el}
        />
      ))}
    </div>
  );
};

export default RenderWeek;
