import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";

import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import RenderSidebar from "./sitebar/rendersiteBar/RenderSidebar";
import Popup from "./popup/Popup";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Navigation />
        <RenderSidebar />
      </Provider>
    </div>
  );
};
export default App;
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(this.props.getMonday),
//       popup: false,
//       currentBox: "",
//     };
//     console.log(this.state.currentBox);
//   }

//   getPreviousMonth = () => {
//     const { getMonday } = this.props;
//     const prevMonth = getMonday.setDate(getMonday.getDate() - 7);
//     this.setState({
//       date: prevMonth,
//     });
//   };
//   getNextMonth = () => {
//     const { getMonday } = this.props;
//     const nextMonth = getMonday.setDate(getMonday.getDate() + 7);
//     this.setState({
//       date: nextMonth,
//     });
//   };
//   getCurrentDay = () => {
//     this.setState({
//       date: new Date(),
//     });
//   };
//   getPopup = (e) => {
//     this.setState({
//       popup: true,
//       cuttentBox: e.target.value,
//     });
//   };
//   closePopup = (e) => {
//     this.setState({
//       popup: false,
//     });
//   };
//   render() {
//     const { date } = this.state;
//     const { popup } = this.state;
//     return (
//       <div className="app">
//         <Header
//           date={date}
//           prevMonth={this.getPreviousMonth}
//           nextMonth={this.getNextMonth}
//           currentDay={this.getCurrentDay}
//           popup={this.getPopup}
//         />
//         <Navigation date={date} />
//         <RenderSidebar
//           popup={this.getPopup}
//           event={this.state.popup}
//           currentBox={this.state.currentBox}
//         />
//         {popup ? <Popup popup={this.closePopup} /> : null}
//       </div>
//     );
//   }
// }

// export default App;
