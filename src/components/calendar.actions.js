import * as gateWays from "./calendar.gateways";

export const SHOW_POPUP = "SHOW_POPUP";
export const GET_CELL_VALUE = "GET_CELL_VALUE";
export const EVENT_DATA_RECEIVED = "EVENT_DATA_RECEIVED";

export const eventDataReceived = (eventList) => {
  return {
    type: EVENT_DATA_RECEIVED,
    payload: {
      eventList,
    },
  };
};

export const getPopup = (status) => {
  return {
    type: SHOW_POPUP,
    popupStatus: status,
  };
};

export const getCellValue = (id) => {
  return {
    type: GET_CELL_VALUE,
    cellId: id,
  };
};

export const getEventList = () => {
  return function (dispatch) {
    gateWays.fetchEventData().then((eventList) => {
      return dispatch(eventDataReceived(eventList));
    });
  };
};

export const createEvent = (data) => {
  const newEvent = {
    ...data,
  };

  return function (dispatch) {
    gateWays.createEvent(newEvent).then(() => dispatch(getEventList()));
  };
};
