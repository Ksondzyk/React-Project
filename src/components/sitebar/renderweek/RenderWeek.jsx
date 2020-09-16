import React, { useEffect } from "react";
import "./renderweek.scss";
import moment from "moment";
import { connect } from "react-redux";
import Week from "./week/Week";
import { getFilledArray } from "../../fillArray/getFillArray";
import * as calendarActions from "../../calendar.actions";
import {
  calendarPopupSelector,
  calendarCellIdSelector,
  calendarEventSelector,
} from "../../calendar.selectors";

const RenderWeek = ({ getStateEventList, getEventList }) => {
  // const getDayOfWeek = (day) => {
  //   return moment().weekday(day);
  // };
  useEffect(() => {
    getEventList();
  }, []);
  console.log(getStateEventList);
  return getFilledArray(7).map((el) => (
    <div
      className="time-in-day"
      key={el}
      // date={moment(getDayOfWeek(el)).format("YYYY-MM-DD HH:mm:ss")}
    >
      <Week key={el} value={el} />
    </div>
  ));
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
export default connect(mapState, mapDispatch)(RenderWeek);
