import React, { useRef, useState } from "react";
import {
  Wrapper,
  AddPostModalWrapper,
  ModalContent,
  ModalHeader,
  NextButton,
  HeaderTitle,
} from "./AddPostModal-styles";
import AddPostDescription from "../AddPostDescription/AddPostDescription";
import Icon from "../Icon/Icon";
import UploadImage from "../UploadImage/UploadImage";
import { createPost } from "../../services/PostsService";
import { useDispatch, useSelector } from "react-redux";
import { userSelectors, userOperations } from "../../store/user";
import { confirmationModalOperations } from "../../store/confirmationModal";

const AddPostModal = ({ setShowModal }) => {
  const isDesktopRes = window.screen.width >= 1460;
  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState({
    width: isDesktopRes ? "680px" : "545px",
    height: isDesktopRes ? "720px" : "580px",
  });
  const [stage, setStage] = useState(1);
  // 1 stage - user suggested to select photo
  // 2 stage - photo selected, left arrow - - > to stage 3, Next button - - > to stage 3
  // 3 stage - description, , left arrow - - > to stage 2, Next button - - > publish
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser());
  const textArea = useRef(null);
  const modalRef = useRef(null);

  const setSizeWidth = (stage) => {
    if (stage === 2) {
      setSizes((prevState) => {
        return { ...prevState, width: isDesktopRes ? "1020px" : "885px" };
      });
    } else {
      setSizes((prevState) => {
        return { ...prevState, width: isDesktopRes ? "680px" : "580px" };
      });
    }
  };

  const showConfirmationModal = () => {
    dispatch(
      confirmationModalOperations.customizeModal({
        title: "Discard post?",
        warning: "If you leave, your edits won't be saved.",
        actionBtnText: "Discard",
        actionBtnHandler: () => {
          dispatch(confirmationModalOperations.closeModal());
          setShowModal(false);
        },
      })
    );
    dispatch(confirmationModalOperations.setShowModal(true));
  };

  const closeModalOnArea = (e) => {
    if (
      !modalRef.current.contains(e.target) &&
      e.target.textContent !== "Cancel"
    ) {
      if (stage === 1) setShowModal(false);
      else showConfirmationModal();
    }
  };

  const incrementStage = async () => {
    if (stage === 2) setSizeWidth(2);
    if (stage === 3) {
      createPost({
        description: textArea.current.value,
        userId: user.id,
        imageFile: images[0],
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(userOperations.saveAddedPost(data.id));
        });
      setShowModal(false);
    } else {
      setStage((prevState) => prevState + 1);
    }
  };

  const decrementStage = () => {
    if (stage === 3) setSizeWidth(3);
    if (stage === 2) setImages([]);
    setStage((prevState) => prevState - 1);
  };

  return (
    <Wrapper onClick={closeModalOnArea}>
      <AddPostModalWrapper>
        <ModalContent ref={modalRef} sizes={sizes}>
          <ModalHeader>
            {stage > 1 && (
              <Icon
                padding="0 25px 0 0"
                width="21px"
                height="21px"
                type="leftarrow"
                pointer
                onClick={decrementStage}
              />
            )}
            <HeaderTitle>Create new post</HeaderTitle>
            {images.length > 0 && (
              <NextButton onClick={incrementStage}>
                {stage !== 3 && "Next"}
                {stage === 3 && "Publish"}
              </NextButton>
            )}
          </ModalHeader>
          {stage !== 3 && (
            <UploadImage
              images={images}
              setImages={setImages}
              setStage={setStage}
              height={parseInt(sizes.height)}
            />
          )}
          {stage == 3 && (
            <Wrapper display="flex">
              <UploadImage
                images={images}
                setImages={setImages}
                setStage={setStage}
                width={parseInt(sizes.width) - 340}
                height={parseInt(sizes.height)}
                lastStage={true}
                // whole modal width on 3 stage - description wrapper width
              />
              <AddPostDescription
                incrementStage={incrementStage}
                textArea={textArea}
              />
            </Wrapper>
          )}
        </ModalContent>
      </AddPostModalWrapper>
      <Icon
        position="fixed"
        zIndex="10"
        top="30px"
        right="30px"
        type="cross"
        pointer
        onClick={closeModalOnArea}
      />
    </Wrapper>
  );
};

export default AddPostModal;
