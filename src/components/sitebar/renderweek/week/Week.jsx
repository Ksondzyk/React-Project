import React from "react";
import Day from "../day/Day";
import { getFilledArray } from "../../../fillArray/getFillArray";

const Week = ({ value }) => {
  return (
    <>
      {getFilledArray(25).map((el) => (
        <Day key={el} weekDay={el} dayTime={value} />
      ))}
    </>
  );
};

export default Week;
