import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import RenderSidebar from "./RenderSidebar";
import Popup from "./Popup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(this.props.getMonday),
      popup: false,
    };
    console.log(this.state.popup);
  }

  getPreviousMonth = () => {
    const { getMonday } = this.props;
    const prevMonth = getMonday.setDate(getMonday.getDate() - 7);
    this.setState({
      date: prevMonth,
    });
  };
  getNextMonth = () => {
    const { getMonday } = this.props;
    const nextMonth = getMonday.setDate(getMonday.getDate() + 7);
    this.setState({
      date: nextMonth,
    });
  };
  getCurrentDay = () => {
    this.setState({
      date: new Date(),
    });
  };
  getPopup = () => {
    this.setState({
      popup: true,
    });
  };
  closePopup = () => {
    this.setState({
      popup: true,
    });
  };
  render() {
    const { date } = this.state;
    const { popup } = this.state;
    return (
      <div className="app">
        <Header
          date={date}
          prevMonth={this.getPreviousMonth}
          nextMonth={this.getNextMonth}
          currentDay={this.getCurrentDay}
          popup={this.getPopup}
        />
        <Navigation date={date} />
        <RenderSidebar popup={this.getPopup} />
        {popup ? <Popup popup={this.closePopup} /> : null}
      </div>
    );
  }
}

export default App;
