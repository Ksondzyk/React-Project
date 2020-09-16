import React, { useState, useEffect } from "react";
import "./day.scss";
import { connect } from "react-redux";
import * as calendarActions from "../../../calendar.actions";
import {
  calendarPopupSelector,
  calendarCellIdSelector,
  calendarEventSelector,
} from "../../../calendar.selectors";

const Day = ({
  openPopup,
  getStatePopup,

  cellIdVelue,
  getCellId,
  getEventList,
  getStateEventList,
  weekDay,
  dayTime,
}) => {
  useEffect(() => {
    getEventList();
  }, []);

  const [state, setState] = useState();

  const onGetValue = (e) => {
    openPopup(!getStatePopup);
    console.log(weekDay, dayTime);
  };

  const isEvent = (
    <div className="time-in-day__box_event res">
      <h1 className="title"></h1>
      <div className="clock-box">
        <div className="clock-box_time">15</div>
        <span className="clock-box_hyphen">-</span>
        <div className="clock-box_time">30</div>
      </div>
    </div>
  );

  return (
    <div onClick={onGetValue} className="time-in-day__box">
      {/* {5 > 0 ? isEvent : null} */}
    </div>
  );
};

const mapState = (state) => {
  return {
    getStatePopup: calendarPopupSelector(state),
    getCellId: calendarCellIdSelector(state),
    getStateEventList: calendarEventSelector(state),
  };
};
const mapDispatch = {
  openPopup: calendarActions.getPopup,
  cellIdVelue: calendarActions.getCellValue,
  getEventList: calendarActions.getEventList,
};
export default connect(mapState, mapDispatch)(Day);
