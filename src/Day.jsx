import React from "react";
import Minutes from "./Minutes";

const Day = () => {
  return (
    <div className="rectangle_box">
      <Minutes />
    </div>
  );
};

export default Day;
  // const monday = new Date(date);
  // const getMondayDay = new Date(monday).getDay();
  // console.log(getMondayDay);
  // const nextSixDay = monday.setDate(monday.getDate() + 6);
  // const getSunday = new Date(nextSixDay).getDay();
  // console.log(getSunday);