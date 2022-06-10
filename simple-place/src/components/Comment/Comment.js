import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Username from "../Username/Username";
import {
  CommentWrapper,
  ContentWrapper,
  Text,
  LikeWrapper,
  ProfileImgWrapper,
  AdditionalText,
} from "./Comment-styles";
import Icon from "../Icon/Icon";
import { useState } from "react";
import { removeComment, updateLikes } from "../../services/PostsService";
import { useDispatch } from "react-redux";
import { postModalOperations } from "../../store/postModal";

const Comment = ({
  commentId,
  mainUserId,
  username,
  setComments,
  profileImg,
  comments,
  commentUserId,
  postId,
  userId,
  text,
  likes = [],
  modalHandler,
  isDescription = false,
}) => {
  const dispatch = useDispatch();
  const [isFilled, setIsFilled] = useState(
    likes.includes(mainUserId) ? true : false
  );
  const [likesArr, setLikesArr] = useState(likes);

  const likeHandler = () => {
    setIsFilled((prevState) => !prevState);
    if (!isFilled) {
      likes.push(mainUserId);
    } else {
      const userIndex = likes.indexOf(mainUserId);
      likes.splice(userIndex, userIndex + 1);
    }
    setLikesArr(likes);
    updateLikes(commentId, likes, "comment");
  };

  const removeCommentHandler = () => {
    removeComment(postId, commentId, comments)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
        dispatch(postModalOperations.updateComments(data.comments));
      });
  };

  return (
    <CommentWrapper>
      <ProfileImgWrapper>
        <ProfileIcon src={profileImg} width="34px" height="34px" />
      </ProfileImgWrapper>
      <ContentWrapper>
        <Username
          username={username}
          margin="0 10px 0 0"
          weight="700"
          fontSize="14px"
        />
        <Text>{text}</Text>
        {!isDescription && (
          <LikeWrapper>
            <Icon
              type="like"
              width="12.5"
              height="11"
              pointer
              stroke={isFilled ? "red" : "black"}
              color={isFilled ? "red" : "none"}
              onClick={likeHandler}
            />
          </LikeWrapper>
        )}
        {likesArr.length > 0 && !isDescription && (
          <AdditionalText onClick={modalHandler.bind(this, commentId)}>
            {likesArr.length} {likesArr.length === 1 ? "like" : "likes"}
          </AdditionalText>
        )}
        {(mainUserId === commentUserId || userId === mainUserId) &&
          !isDescription && (
            <AdditionalText remove onClick={removeCommentHandler}>
              delete
            </AdditionalText>
          )}
      </ContentWrapper>
    </CommentWrapper>
  );
};

export default Comment;
