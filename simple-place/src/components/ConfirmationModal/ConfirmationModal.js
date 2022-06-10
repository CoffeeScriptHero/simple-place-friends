import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Wrapper,
  ConfirmationModalWrapper,
  ModalContent,
  TextWrapper,
  ConfirmationTitle,
  ConfirmationWarning,
  ConfirmationButton,
} from "./ConfirmationModal-styles";
import {
  confirmationModalSelectors,
  confirmationModalOperations,
} from "../../store/confirmationModal/index.js";
import ImageUploading from "react-images-uploading";
import { changeProfileImg } from "../../services/UserService";
import { userOperations, userSelectors } from "../../store/user";

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const modal = useRef(null);
  const modalInfo = useSelector(confirmationModalSelectors.getModalInfo());
  const { id, profileImg } = useSelector(userSelectors.getUser());

  const cancelHandler = () => {
    dispatch(confirmationModalOperations.setShowModal(false));
  };

  const closeModalOnArea = (e) => {
    if (!modal.current.contains(e.target)) {
      dispatch(confirmationModalOperations.closeModal());
    }
  };

  const onChange = (imageList, addUpdateIndex) => {
    dispatch(confirmationModalOperations.closeModal());
    changeProfileImg({ userId: id, imageFile: imageList[0] })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(userOperations.updateProfilePic(data.image));
        }
      });
  };

  if (!modalInfo.showModal) return null;

  return (
    <Wrapper onClick={closeModalOnArea}>
      <ConfirmationModalWrapper>
        <ModalContent ref={modal}>
          <TextWrapper>
            <ConfirmationTitle>{modalInfo.title}</ConfirmationTitle>
            {modalInfo.warning && (
              <ConfirmationWarning>{modalInfo.warning}</ConfirmationWarning>
            )}
          </TextWrapper>
          {modalInfo.extraBtnText && (
            <ImageUploading
              onChange={onChange}
              maxNumber={1}
              dataURLKey="data_url"
            >
              {({ onImageUpload, dragProps }) => (
                <ConfirmationButton
                  borderTop="1px solid rgba(var(--b6a, 219, 219, 219), 1)"
                  color="#5551ff"
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  {modalInfo.extraBtnText}
                </ConfirmationButton>
              )}
            </ImageUploading>
          )}
          <ConfirmationButton
            borderTop="1px solid rgba(var(--b6a, 219, 219, 219), 1)"
            borderBottom="1px solid rgba(var(--b6a, 219, 219, 219), 1)"
            color="rgba(var(--i30,237,73,86),1)"
            onClick={modalInfo.actionBtnHandler}
          >
            {modalInfo.actionBtnText}
          </ConfirmationButton>
          <ConfirmationButton onClick={cancelHandler}>
            Cancel
          </ConfirmationButton>
        </ModalContent>
      </ConfirmationModalWrapper>
    </Wrapper>
  );
};

export default ConfirmationModal;
