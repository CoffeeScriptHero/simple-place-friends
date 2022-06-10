const getUsers = () => (state) => {
  return state.usersModal.users;
};

const getModalType = () => (state) => {
  return state.usersModal.modalType;
};

export default {
  getUsers,
  getModalType,
};
