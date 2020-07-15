import React, { Component } from "react";
import generateWeekRange from "./generateWeekRange.js";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: new Date(this.props.date),
    };
  }

  render() {
    return (
      <section className="date-container">
        <div className="day-container timezone">GMT+02</div>
        {generateWeekRange(this.state.week).map((el) => {
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
  }
}
export default Navigation;
