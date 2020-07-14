import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import RenderSidebar from "./RenderSidebar";
import Popup from "./Popup";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      lastDayInMonth: "",
      lastDayInPreviousMonth: "",
    };
  }
  getFirstDayInMonth = () => {
    const d = new Date();
    const LastDayOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    this.setState({
      lastDayInMonth: LastDayOfMonth,
    });
  };
  getLastDayInPreviousMonth = () => {
    const d = new Date();
    const lastDayOfMonth = new Date(d.getFullYear(), d.getMonth() - 1, 0);
    console.log(lastDayOfMonth);
    this.setState({
      lastDayInPreviousMonth: lastDayOfMonth,
    });
  };

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
  render() {
    return (
      <div className="app">
        <Header
          date={this.state.date}
          prevMonth={this.getPreviousMonth}
          NextMonth={this.getNextMonth}
        />
        <Navigation date={this.state.date} />
        <RenderSidebar />
        <Popup />
      </div>
    );
  }
}

export default App;
