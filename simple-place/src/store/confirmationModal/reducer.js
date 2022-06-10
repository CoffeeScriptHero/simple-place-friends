import types from "./types";

const initialState = {
  showModal: false,
  title: null,
  warning: null,
  actionBtnText: null,
  extraBtnText: null,
  actionBtnHandler: null,
  extraBtnHandler: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }
    case types.CUSTOMIZE_MODAL: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.CLOSE_MODAL: {
      return {
        showModal: false,
        title: null,
        warning: null,
        actionBtnText: null,
        extraBtnText: null,
        actionBtnHandler: null,
        extraBtnHandler: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
