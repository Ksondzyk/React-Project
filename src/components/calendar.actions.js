export const SHOW_POPUP = "SHOW_POPUP";

export const getPopup = (status) => {
  return {
    type: SHOW_POPUP,
    popupStatus: status,
  };
};
