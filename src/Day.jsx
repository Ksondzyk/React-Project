import React from "react";
import Minutes from "./Minutes";

const Day = ({ popup }) => {
  console.log(popup);
  return (
    <div className="rectangle_box" onClick={popup}>
      <Minutes />
    </div>
  );
};

export default Day;
