import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section class="date-container">
        <div class="day-container timezone">GMT+02</div>
        <div class="day-container">
          <h1 class="day-container_text">Пн</h1>
          <h2 class="day-container_number">27</h2>
        </div>
        <div class="day-container">
          <h1 class="day-container_text">Вт</h1>
          <span class="day-container_number">27</span>
        </div>
        <div class="day-container">
          <h1 class="day-container_text">Ср</h1>
          <span class="day-container_number radius">27</span>
        </div>
        <div class="day-container">
          <h1 class="day-container_text">Чт</h1>
          <span class="day-container_number">27</span>
        </div>
        <div class="day-container">
          <h1 class="day-container_text">Пт</h1>
          <span class="day-container_number">27</span>
        </div>
        <div class="day-container">
          <h1 class="day-container_text">Сб</h1>
          <span class="day-container_number">27</span>
        </div>
        <div class="day-container">
          <h1 class="day-container_text">ВС</h1>
          <span class="day-container_number">27</span>
        </div>
      </section>
    );
  }
}
export default Navigation;
