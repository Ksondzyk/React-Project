import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import RenderSidebar from "./RenderSidebar";
import Popup from "./Popup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.getMonday,
    };
    console.log(this.state.date);
  }
  getPreviousMonth = () => {
    const { date } = this.state;
    const prevMonth = date.setDate(date.getDate() - 7);
    this.setState({
      date: prevMonth,
    });
  };
  getNextMonth = () => {
    const { date } = this.state;
    console.log(date);
    const nextMonth = date.setDate(date.getDate() + 7);
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
        <Navigation />
        <RenderSidebar />
        <Popup />
      </div>
    );
  }
}

export default App;
