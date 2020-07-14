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
  getSevenDaysInWeek = () => {
    const date = new Date(this.props.date);
    console.log(date);
    const prev = new Date(date).getDate();
    console.log(prev);
    const setNextMonday = new Date(date.setDate(date.getDate() + 7));
    console.log(setNextMonday);
    const next = new Date(setNextMonday).getDate();
    console.log(next);
    const days = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ];
    const daysOfTheCurrentWeek = days.slice(prev - 1, next - 1);
    console.log(daysOfTheCurrentWeek);
    daysOfTheCurrentWeek.forEach((el, index) => {
      this.state.weekDays[index].value = el;
    });
  };

  render() {
    this.getSevenDaysInWeek();
    // const date = new Date(this.props.date);
    // console.log(date);
    // const prev = new Date(date).getDate();
    // const setNextMonday = new Date(date.setDate(date.getDate() + 7));
    // console.log(setNextMonday);
    // const next = new Date(setNextMonday).getDate();
    // const days = [
    //   "1",
    //   "2",
    //   "3",
    //   "4",
    //   "5",
    //   "6",
    //   "7",
    //   "8",
    //   "9",
    //   "10",
    //   "11",
    //   "12",
    //   "13",
    //   "14",
    //   "15",
    //   "16",
    //   "17",
    //   "18",
    //   "19",
    //   "20",
    //   "21",
    //   "22",
    //   "23",
    //   "24",
    //   "25",
    //   "26",
    //   "27",
    //   "28",
    //   "29",
    //   "30",
    //   "31",
    // ];
    // const daysOfTheCurrentWeek = days.slice(prev - 1, next - 1);
    // console.log(daysOfTheCurrentWeek);
    // daysOfTheCurrentWeek.forEach((el, index) => {
    //   this.state.weekDays[index].value = el;
    // });
    // console.log(this.state.weekDays);
    const { weekDays } = this.state;
    return (
      <section className="date-container">
        <div className="day-container timezone">GMT+02</div>
        {weekDays.map(({ id, value }) => (
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
