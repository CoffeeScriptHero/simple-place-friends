import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  SmileWrapper,
  TextAreaWrapper,
  PickerWrapper,
  TextArea,
  Submit,
} from "./CommentForm-styles";
import { useDispatch, useSelector } from "react-redux";
import { userSelectors } from "../../store/user";
import { createComment } from "../../services/PostsService";
import { postModalOperations } from "../../store/postModal";
import Icon from "../Icon/Icon";
import Picker from "emoji-picker-react";

const CommentForm = ({ postId, setComments, isModal, ...rest }) => {
  const dispatch = useDispatch();
  const textArea = useRef(null);
  const picker = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isFullText, setIsFullText] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const userId = useSelector(userSelectors.getUser()).id;
  const maxSize = isModal ? 40 : 89;

  const textHandler = () => {
    if (textArea.current.scrollHeight <= maxSize) {
      textArea.current.style.height = textArea.current.scrollHeight - 4 + "px";
      if (isFullText) setIsFullText(false);
    } else if (!isFullText) {
      setIsFullText(true);
    }
    if (textArea.current.value.trim() !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const pickerHandler = () => {
    setShowPicker((prevState) => !prevState);
  };

  const onEmojiClick = (event, emojiObject) => {
    if (!isActive) setIsActive(true);
    textArea.current.value += emojiObject.emoji;
  };

  const closePickerHandler = (e) => {
    if (showPicker && picker.current && !picker.current.contains(e.target)) {
      setShowPicker(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createComment(postId, userId, textArea.current.value)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
        dispatch(postModalOperations.updateComments(data.comments));
      });
    textArea.current.value = "";
    setIsActive(false);
  };

  useEffect(() => {
    if (showPicker) {
      document.addEventListener("click", closePickerHandler);
      return () => {
        document.removeEventListener("click", closePickerHandler);
      };
    }
  }, [showPicker]);

  return (
    <Form {...rest}>
      <TextAreaWrapper>
        {showPicker && (
          <PickerWrapper ref={picker}>
            <Picker onEmojiClick={onEmojiClick} />
          </PickerWrapper>
        )}
        <SmileWrapper isModal={isModal}>
          <Icon type="smile" pointer onClick={pickerHandler} />
        </SmileWrapper>
        <TextArea
          placeholder={"Write something.."}
          ref={textArea}
          onInput={textHandler}
          isFullText={isFullText}
        ></TextArea>
        <Submit
          isModal={isModal}
          isActive={isActive}
          onClick={submitHandler.bind(this)}
        >
          Publish
        </Submit>
      </TextAreaWrapper>
    </Form>
  );
};

export default CommentForm;
