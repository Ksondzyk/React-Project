import React from "react";

const HeaderNavigationLeft = () => {
  return (
    <div className="header-left">
      <button className="header-left_btn">
        <div className="header-left_btn__img"></div>
        <div className="header-left_btn__title">Создать</div>
      </button>
      <button className="header-left_square">Сегодня</button>
    </div>
  );
};

export default HeaderNavigationLeft;
