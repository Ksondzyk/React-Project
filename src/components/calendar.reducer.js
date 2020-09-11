import { SHOW_POPUP } from "./calendar.actions";

export const popupReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_POPUP: {
      return action.popupStatus;
    }
    default:
      return state;
  }
};
