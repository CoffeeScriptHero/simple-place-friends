import types from "./types";

const initialState = {
  username: null,
  profileImg: null,
  image: null,
  likes: null,
  id: null,
  userId: null,
  comments: null,
  description: null,
  deleteHandler: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POST_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.CLEAR_POST_INFO: {
      return {
        username: null,
        profileImg: null,
        image: null,
        likes: null,
        userId: null,
        id: null,
        comments: [],
        description: null,
      };
    }
    case types.UPDATE_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
