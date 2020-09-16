import {
  SHOW_POPUP,
  GET_CELL_VALUE,
  EVENT_DATA_RECEIVED,
} from "./calendar.actions";
const initialState = {
  eventDate: [],
};

export const eventDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENT_DATA_RECEIVED: {
      return {
        ...state,
        eventDate: action.payload.eventList,
      };
    }
    default:
      return state;
  }
};

export const popupReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_POPUP: {
      return action.popupStatus;
    }
    default:
      return state;
  }
};
export const cellIdReducer = (state = null, action) => {
  switch (action.type) {
    case GET_CELL_VALUE: {
      return action.cellId;
    }
    default: {
      return state;
    }
  }
};
