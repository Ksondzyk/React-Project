import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
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
