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
    };
    console.log(this.state.date);
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
