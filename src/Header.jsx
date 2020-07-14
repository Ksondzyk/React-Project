import React from "react";
import moment from "moment";

const Header = ({ prevMonth, NextMonth, date }) => {
  const formatDateMonth = (date) => moment(date).format("MMM");
  const formatDateYear = (date) => moment(date).format(" YYYY");
  return (
    <header className="header-main">
      <div className="header-left">
        <button className="header-left_btn">
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
        <button className="header-rigth_btn" onClick={prevMonth}>
          <i className="fas fa-angle-left"></i>
        </button>
        <button className="header-rigth_btn" onClick={NextMonth}>
          <i className="fas fa-angle-right"></i>
        </button>
        <div className="header-rigth_mounth">
          <div className="header-rigth_mounth_main">
            {formatDateMonth(date)}
          </div>
          <div className="header-rigth_mounth_main">{formatDateYear(date)}</div>
          <span className="header-rigth_mounth_notmain">-</span>
          <div className="header-rigth_mounth_notmain"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
// const fistDayOfMonth = days[new Date(d.getFullYear(), d.getMonth(), 1)];
// const LastDayOfMonth = days[new Date(d.getFullYear(), d.getMonth() + 1, 0)];
