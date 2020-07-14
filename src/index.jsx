import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
// const d = new Date();
// const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
// const fistDayOfMonth = days[new Date(d.getFullYear(), d.getMonth(), 1)];
// const LastDayOfMonth = days[new Date(d.getFullYear(), d.getMonth() + 1, 0)];
// console.log("first:" + fistDayOfMonth);
// console.log("first:" + LastDayOfMonth);

const getMonday = () => {
  const now = new Date();
  const getFirstWeekDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + (8 - now.getDay())
  );
  return getFirstWeekDay;
};
const elementRoot = document.querySelector("#root");
ReactDOM.render(<App getMonday={getMonday()} />, elementRoot);
