import types from "./types";

const saveUser = (userInfo) => ({
  type: types.SAVE_USER,
  payload: userInfo,
});

const setLogged = (isLogged) => ({
  type: types.SET_LOGGED,
  payload: isLogged,
});

const updateModal = () => ({
  type: types.UPDATE_MODAL,
});

const saveAddedPost = (post) => ({
  type: types.SAVE_ADDED_POST,
  payload: post,
});

const saveDeletedPost = (post) => ({
  type: types.SAVE_DELETED_POST,
  payload: post,
});

const updateUsername = (username) => ({
  type: types.UPDATE_USERNAME,
  payload: username,
});

const updateProfilePic = (profilePic) => ({
  type: types.UPDATE_PROFILE_PIC,
  payload: profilePic,
});

const actionsObj = {
  saveUser,
  setLogged,
  updateModal,
  saveAddedPost,
  saveDeletedPost,
  updateUsername,
  updateProfilePic,
};

export default actionsObj;
