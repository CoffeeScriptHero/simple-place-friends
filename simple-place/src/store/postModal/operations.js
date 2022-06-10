import actions from "./actions";

const setPostInfo = (postInfo) => (dispatch, getState) => {
  dispatch(actions.setPostInfo(postInfo));
};

const updateComments = (commentsArray) => (dispatch, getState) => {
  dispatch(actions.updateComments(commentsArray));
};

const clearPostInfo = () => (dispatch, getState) => {
  dispatch(actions.clearPostInfo());
};

const operationsObj = { setPostInfo, clearPostInfo, updateComments };

export default operationsObj;
