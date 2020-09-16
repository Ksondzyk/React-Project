import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  popupReducer,
  cellIdReducer,
  eventDataReducer,
} from "./components/calendar.reducer";

const reducer = combineReducers({
  popupStatus: popupReducer,
  cellId: cellIdReducer,
  eventData: eventDataReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

export default store;
