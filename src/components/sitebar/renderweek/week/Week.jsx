import React from "react";
import Day from "../day/Day";

const Week = ({ popup, event, id }) => {
  const arrDays = new Array(7).fill(1).map((el, index) => index);
  return (
    <>
      {arrDays.map((el, index) => (
        <Day
          popup={popup}
          event={event}
          key={el}
          idDay={index.toString() + parseInt(Math.random() * 36)}
          idWeek={id + 7}
        />
      ))}
    </>
  );
};

export default Week;
