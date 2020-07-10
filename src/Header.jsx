import React, { Component } from "react";
import moment from "moment";

const Header = ({ date }) => {
  const formatDate = (date) => moment(date).format("DD MMM YYYY");
  return (
    <header className="header-main">
      <div className="header-left">
        <button className="header-left_btn">
          <div className="header-left_btn__img"></div>
          <div className="header-left_btn__title">Создать</div>
        </button>
        <button className="header-left_square">Сегодня</button>
      </div>
      <div className="header-rigth">
        <button className="header-rigth_btn">
          <i className="fas fa-angle-left"></i>
        </button>
        <button className="header-rigth_btn">
          <i className="fas fa-angle-right"></i>
        </button>
        <h1 className="header-rigth_mounth">{formatDate(date)}</h1>
      </div>
    </header>
  );
};

export default Header;
