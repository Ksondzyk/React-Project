import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import RenderSidebar from "./RenderSidebar";
import Popup from "./Popup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <div className="app">
        <Header date={this.state.date} />
        <Navigation />
        <RenderSidebar />
        <Popup />
      </div>
    );
  }
}

export default App;
