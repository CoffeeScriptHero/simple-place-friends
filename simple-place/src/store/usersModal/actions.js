import types from "./types";

const setModalType = (type) => ({
  type: types.SET_MODAL_TYPE,
  payload: type,
});

const setUsers = (users) => ({
  type: types.SET_USERS,
  payload: users,
});

const actionsObj = { setModalType, setUsers };

export default actionsObj;
