import React, { Component } from "react";
import generateWeekRange from "./generateWeekRange.js";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: generateWeekRange(this.props.date),
    };
    console.log(this.props.date);
  }

  render() {
    return (
      <section className="date-container">
        <div className="day-container timezone">GMT+02</div>
        {this.state.week.map((el) => (
          <div className="day-container" key={el}>
            <h1 className="day-container_text">Пн</h1>
            <h2 className="day-container_number">{new Date(el).getDate()}</h2>
          </div>
        ))}
      </section>
    );
  }
}
export default Navigation;
