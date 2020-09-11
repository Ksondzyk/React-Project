import React from "react";
import "./header.scss";
import { connect } from "react-redux";
import * as calendarActions from "../calendar.actions";
import { calendarPopupSelector } from "../calendar.selectors";
import moment from "moment";

const Header = ({ popupStatus, popupState }) => {
  console.log(popupState);

  const receivePopup = (event) => {
    popupStatus(!popupState);
  };
  const date = new Date();
  const formatDateMonth = (date) => moment(date).format("MMM");
  const formatDateYear = (date) => moment(date).format("YYYY");
  const monday = new Date(date);
  const getFirstWeek = new Date(monday).getMonth();
  const nextSixDay = monday.setDate(monday.getDate() + 6);
  const getLastWeek = new Date(nextSixDay).getMonth();
  const plusMonth = monday.setMonth(monday.getMonth());
  let result;
  if (getFirstWeek === getLastWeek) {
    result = (
      <>
        <div className="header-rigth_mounth_main">{formatDateMonth(date)}</div>
        <div className="header-rigth_mounth_main">{formatDateYear(date)}</div>
      </>
    );
  } else {
    result = (
      <>
        <div className="header-rigth_mounth_main">{formatDateMonth(date)}</div>
        <span className="header-rigth_mounth_dash">-</span>
        <div className="header-rigth_mounth_main">
          {formatDateMonth(plusMonth)}
        </div>
        <div className="header-rigth_mounth_main">{formatDateYear(date)}</div>
      </>
    );
  }

  return (
    <header className="header-main">
      <div className="header-left">
        <button className="header-left_btn" onClick={receivePopup}>
          <svg
            className="header-left_btn__img"
            width="36"
            height="36"
            viewBox="0 0 36 36"
          >
            <path fill="#34A853" d="M16 16v14h4V20z"></path>
            <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
            <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
            <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
            <path fill="none" d="M0 0h36v36H0z"></path>
          </svg>

          <div className="header-left_btn__title">Создать</div>
        </button>
        <button className="header-left_square">Сегодня</button>
      </div>
      <div className="header-rigth">
        <div className="header-rigth_buttons">
          <button className="header-rigth_btn">
            <i className="fas fa-angle-left"></i>
          </button>
          <button className="header-rigth_btn">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
        <div className="header-rigth_mounth"></div>
      </div>
    </header>
  );
};
const mapState = (state) => {
  return {
    popupState: calendarPopupSelector(state),
  };
};
const mapDispatch = {
  popupStatus: calendarActions.getPopup,
};
export default connect(mapState, mapDispatch)(Header);
