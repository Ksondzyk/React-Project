import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="date-container">
        <div className="day-container timezone">GMT+02</div>
        <div className="day-container">
          <h1 className="day-container_text">Пн</h1>
          <h2 className="day-container_number">27</h2>
        </div>
        <div className="day-container">
          <h1 className="day-container_text">Вт</h1>
          <span className="day-container_number">27</span>
        </div>
        <div className="day-container">
          <h1 className="day-container_text">Ср</h1>
          <span className="day-container_number radius">27</span>
        </div>
        <div className="day-container">
          <h1 className="day-container_text">Чт</h1>
          <span className="day-container_number">27</span>
        </div>
        <div className="day-container">
          <h1 className="day-container_text">Пт</h1>
          <span className="day-container_number">27</span>
        </div>
        <div className="day-container">
          <h1 className="day-container_text">Сб</h1>
          <span className="day-container_number">27</span>
        </div>
        <div className="day-container">
          <h1 className="day-container_text">ВС</h1>
          <span className="day-container_number">27</span>
        </div>
      </section>
    );
  }
}
export default Navigation;
