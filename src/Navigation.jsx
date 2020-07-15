import React, { Component } from "react";
import generateWeekRange from "./generateWeekRange.js";

const Navigation = ({ date }) => {
  const week = generateWeekRange(date);
  return (
    <section className="date-container">
      <div className="day-container timezone">GMT+02</div>
      {week.map((el) => {
        if (new Date(el).getDate() === new Date().getDate()) {
          return (
            <div className="day-container" key={el}>
              <h1 className="day-container_text">
                {
                  ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][
                    new Date(el).getDay()
                  ]
                }
              </h1>
              <h2 className="day-container_number current-day">
                {new Date(el).getDate()}
              </h2>
            </div>
          );
        }
        return (
          <div className="day-container" key={el}>
            <h1 className="day-container_text">
              {
                ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][
                  new Date(el).getDay()
                ]
              }
            </h1>
            <h2 className="day-container_number">{new Date(el).getDate()}</h2>
          </div>
        );
      })}
    </section>
  );
};

export default Navigation;
