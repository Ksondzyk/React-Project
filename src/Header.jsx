import React, { Component } from "react";
import HeaderNavigationLeft from "./HeaderNavigationLeft";
import HeaderNavigationRigth from "./HeaderNavigationRigth";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header-main">
        <HeaderNavigationLeft />
        <HeaderNavigationRigth />
      </header>
    );
  }
}
export default Header;
