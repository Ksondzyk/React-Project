import React from "react";

const Popup = () => {
  return (
    <section class="popup">
      <form class="popup-form">
        <div class="name-events">
          <button class="name-events_btn">
            <i class="far fa-times-circle"></i>
          </button>
          <input
            type="text"
            onChange=""
            value="Breakfast width friends"
            class="name-events_input"
          />
        </div>
        <div class="date-events">
          <span class="date-events_img">
            <i class="far fa-clock"></i>
          </span>
          <input
            class="date-events_input"
            name="date"
            list="dates"
            value="1 февраля 2020"
            c
          />
          <datalist id="dates" class="date-events_list">
            <option class="date-events_list__elem" value="1 февраля 2020" />
            <option class="date-events_list__elem" value="2 февраля 2020" />
            <option class="date-events_list__elem" value="4 февраля 2020" />
            <option class="date-events_list__elem" value="5 февраля 2020" />
            <option class="date-events_list__elem" value="Frattamaggiore" />
          </datalist>
          <input
            class="date-events_input time-input"
            name="Time"
            list="prevTime"
            value="15: 30"
          />
          <datalist id="prevTime" class="date-events_list">
            <option class="date-events_list__elem" value="11 : 30" />
            <option class="date-events_list__elem" value="12 : 30" />
            <option class="date-events_list__elem" value="13 : 30" />
            <option class="date-events_list__elem" value="14 : 30" />
            <option class="date-events_list__elem" value="15 : 30" />
          </datalist>
          -
          <input
            class="date-events_input time-input"
            name="Time"
            list="nextTime"
            value="16: 30"
          />
          <datalist id="nextTime" class="date-events_list">
            <option class="date-events_list__elem" value="16 : 30" />
            <option class="date-events_list__elem" value="17 : 30" />
            <option class="date-events_list__elem" value="18 : 30" />
            <option class="date-events_list__elem" value="19 : 30" />
            <option class="date-events_list__elem" value="20 : 30" />
            <option class="date-events_list__elem" value="Frattamaggiore" />
          </datalist>
        </div>
        <div class="description">
          <span class="description_img">
            <i class="fas fa-bars"></i>
          </span>
          <div class="description_textarea">
            <textarea
              name="comment"
              placeholder="Добавьте описание"
              required
              form="text"
              class="description_textarea__input"
              placeholder="Добавьте описание"
            ></textarea>
          </div>
        </div>
        <div class="btn-container">
          <button class="btn-container_form" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </section>
  );
};

export default Popup;
