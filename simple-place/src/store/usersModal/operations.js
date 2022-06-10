import actions from "./actions";

const getFollowers = (username) => async (dispatch, getState) => {
  fetch("/api/users/get-followers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(actions.setUsers(data.followers));
    });
};

const getFollowing = (username) => async (dispatch, getState) => {
  fetch("/api/users/get-following", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(actions.setUsers(data.following));
    });
};

const getLiked = (id, type) => async (dispatch, getState) => {
  fetch("/api/post/get-liked", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, type }),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(actions.setUsers(data.liked));
    });
};

const deleteUser = (username) => (dispatch, getState) => {
  const updatedUsers = getState().usersModal.users.filter(
    (u) => u.username !== username
  );
  getState().usersModal.users = updatedUsers;
  dispatch(actions.setUsers(updatedUsers));
};

const setNewModalType = (type) => (dispatch, getState) => {
  dispatch(actions.setModalType(type));
};

const operationsObj = {
  setNewModalType,
  getFollowers,
  getFollowing,
  getLiked,
  deleteUser,
};

export default operationsObj;
