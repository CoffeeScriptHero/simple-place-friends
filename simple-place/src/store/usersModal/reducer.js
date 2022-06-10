import types from "./types";

const initialState = {
  modalType: null,
  users: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MODAL_TYPE: {
      return {
        ...state,
        users: null,
        modalType: action.payload,
      };
    }
    case types.SET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
