import React from "react";
import {
  PostPreview,
  PostInfo,
  Wrapper,
  Stat,
  InfoText,
} from "./UserPost-styles";
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";
import { postModalOperations } from "../../store/postModal";
import { receiveData } from "../../services/UserService";
import { userOperations } from "../../store/user";

const UserPost = ({
  userId,
  id,
  img,
  likes,
  comments,
  description,
  dispatch,
}) => {
  const navigate = useNavigate();

  const postModalHandler = () => {
    receiveData({ id: userId }, "/api/main_user/get-user-data")
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          postModalOperations.setPostInfo({
            username: data.username,
            profileImg: data.profileImg,
            image: img,
            likes: likes,
            userId: userId,
            postId: id,
            comments: comments,
            description: description,
          })
        );
        navigate(`p/${id}`);
      });
  };
  return (
    <Wrapper>
      <PostPreview img={img} onClick={postModalHandler}></PostPreview>
      <Stat>
        <PostInfo>
          <Icon type="like" stroke={"white"} color={"white"}></Icon>
          <InfoText>{likes.length}</InfoText>
        </PostInfo>
        <PostInfo>
          <Icon type="previewcomment" stroke={"white"} color={"white"}></Icon>
          <InfoText>{comments.length}</InfoText>
        </PostInfo>
      </Stat>
    </Wrapper>
  );
};

export default UserPost;
