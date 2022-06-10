import types from "./types";

const setPostInfo = (postInfo) => ({
  type: types.SET_POST_INFO,
  payload: postInfo,
});

const updateComments = (commentsArray) => ({
  type: types.UPDATE_COMMENTS,
  payload: commentsArray,
});

const clearPostInfo = () => ({
  type: types.CLEAR_POST_INFO,
});

const actionsObj = { setPostInfo, clearPostInfo, updateComments };

export default actionsObj;
