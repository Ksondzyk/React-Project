import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import {
  calendarPopupSelector,
  calendarCellIdSelector,
} from "../calendar.selectors";
import * as calendarActions from "../calendar.actions";
import "./popup.scss";

const Popup = ({
  popupStatus,
  closePopup,
  saveDate,
  eventDate,
  createEvent,
  getCellId,
}) => {
  const onClosePopup = (event) => {
    event.preventDefault();
    closePopup(!popupStatus);
  };
  const [state, setUpdateState] = useState({ title: "", comment: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateState({
      ...state,
      [name]: value,
      cellId: getCellId,
    });
  };
  // console.log(state);
  const handleSumbit = (event) => {
    event.preventDefault();
    createEvent(state);
    eventDate(state);
    saveDate("12");
    closePopup(!popupStatus);
  };

  return (
    <section className={classNames("popup", { visible: popupStatus })}>
      <form className="popup-form" onSubmit={handleSumbit}>
        <div className="name-events">
          <button className="name-events_btn" onClick={onClosePopup}>
            <i className="fas fa-times-circle"></i>
          </button>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Breakfast width friends"
            value={state.title}
            className="name-events_input"
          />
        </div>
        <div className="date-events">
          <span className="date-events_img">
            <i className="far fa-clock"></i>
          </span>
          <input
            className="date-events_input"
            name="date"
            list="dates"
            value="1 февраля 2020"
            onChange={handleChange}
          />
          <datalist id="dates" className="date-events_list">
            <option className="date-events_list__elem" value="1 февраля 2020" />
            <option className="date-events_list__elem" value="2 февраля 2020" />
            <option className="date-events_list__elem" value="4 февраля 2020" />
            <option className="date-events_list__elem" value="5 февраля 2020" />
            <option className="date-events_list__elem" value="Frattamaggiore" />
          </datalist>
          <input
            className="date-events_input time-input"
            name="Time"
            list="prevTime"
            value="15: 30"
            onChange={handleChange}
          />
          <datalist id="prevTime" className="date-events_list">
            <option className="date-events_list__elem" value="11 : 30" />
            <option className="date-events_list__elem" value="12 : 30" />
            <option className="date-events_list__elem" value="13 : 30" />
            <option className="date-events_list__elem" value="14 : 30" />
            <option className="date-events_list__elem" value="15 : 30" />
          </datalist>
          -
          <input
            className="date-events_input time-input"
            name="Time"
            list="nextTime"
            value="16: 30"
            onChange={handleChange}
          />
          <datalist id="nextTime" className="date-events_list">
            <option className="date-events_list__elem" value="16 : 30" />
            <option className="date-events_list__elem" value="17 : 30" />
            <option className="date-events_list__elem" value="18 : 30" />
            <option className="date-events_list__elem" value="19 : 30" />
            <option className="date-events_list__elem" value="20 : 30" />
            <option className="date-events_list__elem" value="Frattamaggiore" />
          </datalist>
        </div>
        <div className="description">
          <span className="description_img">
            <i className="fas fa-bars"></i>
          </span>
          <div className="description_textarea">
            <textarea
              name="comment"
              placeholder="Добавьте описание"
              required
              form="text"
              className="description_textarea__input"
              placeholder="Добавьте описание"
              onChange={handleChange}
              value={state.comment}
              rows="12"
              cols="45"
            ></textarea>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-container_form" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </section>
  );
};

const mapState = (state) => {
  return {
    popupStatus: calendarPopupSelector(state),
    getCellId: calendarCellIdSelector(state),
  };
};
const mapDispatch = {
  closePopup: calendarActions.getPopup,
  saveDate: calendarActions.getCellValue,
  eventDate: calendarActions.eventDataReceived,
  createEvent: calendarActions.createEvent,
};

export default connect(mapState, mapDispatch)(Popup);
