import React from "react";
import Day from "./Day";

const Week = ({ popup }) => {
  return (
    <>
      <Day popup={popup} />
      <Day popup={popup} />
      <Day popup={popup} />
      <Day popup={popup} />
      <Day popup={popup} />
      <Day popup={popup} />
      <Day popup={popup} />
    </>
  );
};

export default Week;
