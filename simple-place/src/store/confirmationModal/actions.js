import types from "./types";

const setShowModal = (showModal) => ({
  type: types.SET_SHOW_MODAL,
  payload: showModal,
});

const customizeModal = (modalSettings) => ({
  type: types.CUSTOMIZE_MODAL,
  payload: modalSettings,
});

const closeModal = () => ({
  type: types.CLOSE_MODAL,
});

const actionsObj = { setShowModal, customizeModal, closeModal };

export default actionsObj;
