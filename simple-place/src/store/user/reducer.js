import types from "./types";

const initialState = {
  user: null,
  id: null,
  profileImg: null,
  following: [],
  followers: [],
  addedPost: null,
  deletedPost: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.UPDATE_MODAL: {
      return {
        ...state,
      };
    }
    case types.SAVE_ADDED_POST: {
      return {
        ...state,
        addedPost: action.payload,
      };
    }
    case types.SAVE_DELETED_POST: {
      return {
        ...state,
        deletedPost: action.payload,
      };
    }
    case types.UPDATE_USERNAME: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case types.UPDATE_PROFILE_PIC: {
      return {
        ...state,
        profileImg: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
