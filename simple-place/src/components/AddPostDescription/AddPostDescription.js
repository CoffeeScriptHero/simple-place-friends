import React, { useState, useRef, useEffect } from "react";
import {
  Wrapper,
  Form,
  TextAreaWrapper,
  TextArea,
  PickerWrapper,
  SmileWrapper,
} from "./AddPostDescription-styles";
import { NextButton } from "../AddPostModal/AddPostModal-styles";
import Icon from "../Icon/Icon";
import UserWrapper from "../UserWrapper/UserWrapper";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store/user";
import Picker from "emoji-picker-react";

const AddPostDescription = ({ incrementStage, textArea }) => {
  const { user, profileImg } = useSelector(userSelectors.getUser());
  const picker = useRef(null);
  const [showPicker, setShowPicker] = useState(false);

  const pickerHandler = () => {
    setShowPicker((prevState) => !prevState);
  };

  const onEmojiClick = (event, emojiObject) => {
    textArea.current.value += emojiObject.emoji;
  };

  const closePickerHandler = (e) => {
    if (showPicker && picker.current && !picker.current.contains(e.target)) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closePickerHandler);
    return () => {
      document.removeEventListener("click", closePickerHandler);
    };
  });

  return (
    <Wrapper>
      <UserWrapper
        profileImg={profileImg}
        username={user}
        padding="16px"
        disableClick
      />
      <Form method="POST">
        <TextAreaWrapper>
          <TextArea ref={textArea} placeholder="Add a signature..."></TextArea>
          {showPicker && (
            <PickerWrapper ref={picker}>
              <Picker onEmojiClick={onEmojiClick} />
            </PickerWrapper>
          )}
          <Wrapper publish>
            <SmileWrapper>
              <Icon type="smile" pointer onClick={pickerHandler} />
            </SmileWrapper>
            <NextButton padding="0 15px 0 0" onClick={incrementStage}>
              Publish
            </NextButton>
          </Wrapper>
        </TextAreaWrapper>
      </Form>
    </Wrapper>
  );
};

export default AddPostDescription;
