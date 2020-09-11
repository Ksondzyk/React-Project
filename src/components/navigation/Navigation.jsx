import React from "react";
import "./navigation.scss";
import generateWeekRange from "../../generateWeekRange.js";

const Navigation = ({ date }) => {
  const week = generateWeekRange(new Date(date));
  return (
    <section className="date-container">
      <div className="day-container timezone">GMT+02</div>
      {week.map((el) => {
        return (
          <div className="day-container" key={el}>
            <h1 className="day-container_text">
              {
                ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][
                  new Date(el).getDay()
                ]
              }
            </h1>
            <h2
              className={`day-container_number" ${
                new Date(el).getMonth() === new Date().getMonth() &&
                new Date(el).getDate() === new Date().getDate()
                  ? "current-day"
                  : null
              }`}
            >
              {new Date(el).getDate()}
            </h2>
          </div>
        );
      })}
    </section>
  );
};

export default Navigation;
