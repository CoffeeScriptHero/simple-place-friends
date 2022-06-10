import actions from "./actions";

const setShowModal = (showModal) => (dispatch, getState) => {
  dispatch(actions.setShowModal(showModal));
};

const customizeModal = (modalSettings) => (dispatch, getState) => {
  dispatch(actions.customizeModal(modalSettings));
};

const closeModal = () => (dispatch, getState) => {
  dispatch(actions.closeModal());
};

const operationsObj = { setShowModal, customizeModal, closeModal };

export default operationsObj;
