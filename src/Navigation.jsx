import React, { Component } from "react";
import moment from "moment";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekDays: [
        { id: "Пн", value: 0, isCurrentDay: false },
        { id: "Вт", value: 0, isCurrentDay: false },
        { id: "Ср", value: 0, isCurrentDay: false },
        { id: "Чт", value: 0, isCurrentDay: false },
        { id: "Пт", value: 0, isCurrentDay: false },
        { id: "Сб", value: 0, isCurrentDay: false },
        { id: "Вс", value: 0, isCurrentDay: false },
      ],
    };
  }

  render() {
    const cuttentIndexDay = new Date().getDay();
    const movedDays = cuttentIndexDay - 1;
    const formatDateMonth = (date) => moment(date).format("DD");
    const currentMonday = new Date(this.props.date).getDate() - movedDays;
    for (let i = 0; i < 7; i++) {
      if (currentMonday + i === new Date(this.props.date).getDate()) {
        this.state.weekDays[i].isCurrentDay = true;
      }
      this.state.weekDays[i].value = currentMonday + i;
    }
    console.log(this.state.weekDays);
    return (
      <section className="date-container">
        <div className="day-container timezone">GMT+02</div>
        {this.state.weekDays.map(({ id, value }) => (
          <div className="day-container" key={id}>
            <h1 className="day-container_text">{id}</h1>
            <h2 className="day-container_number">{value}</h2>
          </div>
        ))}
      </section>
    );
  }
}
export default Navigation;
