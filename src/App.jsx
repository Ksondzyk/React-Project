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
    };
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
  render() {
    const format = "DD.MM.YYYY";
    console.log(moment().get("week"));
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
