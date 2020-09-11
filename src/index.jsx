import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
const getMonday = () => {
  const now = new Date();
  const getFirstWeekDay = new Date(
    now.setDate(now.getDate() - ((now.getDay() + 6) % 7))
  );
  return getFirstWeekDay;
};
const elementRoot = document.querySelector("#root");
ReactDOM.render(<App getMonday={getMonday()} />, elementRoot);
