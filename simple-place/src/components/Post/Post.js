import React, { useEffect, useState } from "react";
import {
  Article,
  Header,
  Main,
  Footer,
  Image,
  IconsWrapper,
  DeleteButton,
  Description,
  ShowMore,
} from "./Post-styles";
import Icon from "../Icon/Icon";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import { receiveData } from "../../services/UserService";
import Username from "../Username/Username";
import UserWrapper from "../UserWrapper/UserWrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postModalOperations, postModalSelectors } from "../../store/postModal";
import { confirmationModalOperations } from "../../store/confirmationModal";
import { deletePost, likeHandler } from "../../services/PostsService";
import LikesSection from "../LikesSection/LikesSection";
import { modalHandler } from "../../services/UsersModalService";

const Post = ({
  img,
  userId,
  postId,
  mainUserId,
  likes,
  liked,
  desc,
  postComments,
  setShowModal,
  setPosts,
}) => {
  const [showDesc, setShowDesc] = useState(true);
  const [userData, setUserData] = useState({
    username: null,
    profileImg: null,
  });
  const [likesArr, setLikesArr] = useState(likes);
  const [isFilled, setIsFilled] = useState(liked);
  const [comments, setComments] = useState(postComments);
  const postInfo = useSelector(postModalSelectors.getModalInfo());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMainUser = mainUserId === userId;

  useEffect(() => {
    if (postInfo.comments && postInfo.postId === postId) {
      setComments(postInfo.comments);
    }
    setIsFilled(liked);
    receiveData({ id: userId }, "/api/main_user/get-user-data")
      .then((res) => res.json())
      .then((data) => {
        setUserData({ username: data.username, profileImg: data.profileImg });
      });
  }, [postInfo.comments, liked]);

  const deletePostHandler = () => {
    deletePost(postId)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          dispatch(confirmationModalOperations.closeModal());
          setPosts((prevState) => {
            return prevState.filter((p) => p.id !== postId);
          });
          return;
        }
      });
  };

  const showConfirmationModal = () => {
    dispatch(
      confirmationModalOperations.customizeModal({
        title: "Delete post?",
        warning: "You can't restore it",
        actionBtnText: "Delete",
        actionBtnHandler: deletePostHandler,
      })
    );
    dispatch(confirmationModalOperations.setShowModal(true));
  };

  const postModalHandler = () => {
    dispatch(
      postModalOperations.setPostInfo({
        username: userData.username,
        profileImg: userData.profileImg,
        image: img,
        likes: likesArr,
        userId: userId,
        postId: postId,
        comments: comments,
        description: desc,
      })
    );
    navigate(`p/${postId}`);
  };

  const showMoreHandler = (e) => {
    e.target.textContent = !showDesc ? "more" : " less";
    setShowDesc(!showDesc);
  };

  if (userData.username === null) return "";

  return (
    <Article>
      <Header>
        <UserWrapper
          profileImg={userData.profileImg}
          username={userData.username}
        />
        {isMainUser && (
          <DeleteButton pdRight="20px" onClick={showConfirmationModal}>
            Delete
          </DeleteButton>
        )}
      </Header>
      <Main>
        <Image src={img}></Image>
      </Main>
      <Footer>
        <IconsWrapper>
          <Icon
            pointer
            margin={"0 10px 0 0"}
            type="like"
            stroke={isFilled ? "red" : "black"}
            color={isFilled ? "red" : "none"}
            onClick={likeHandler.bind(
              this,
              setIsFilled,
              isFilled,
              setLikesArr,
              likes,
              postId,
              mainUserId
            )}
          />
          <Icon pointer type="comment" onClick={postModalHandler} />
        </IconsWrapper>
        <LikesSection
          likes={likesArr}
          id={postId}
          handler={modalHandler.bind(this, dispatch, postId, setShowModal)}
        />
        {desc.length > 0 && (
          <Description>
            <Username
              username={userData.username}
              margin={"0 10px 0 0 "}
              weight={"700"}
              decoration={"underline"}
            />
            {desc.length < 50 && desc}
            {desc.length >= 50 && showDesc && desc.slice(0, 48) + "..."}
            {desc.length >= 50 && !showDesc && desc}
            {desc.length >= 50 && (
              <ShowMore onClick={showMoreHandler}>more</ShowMore>
            )}
          </Description>
        )}

        <Comments
          showAll={false}
          comments={comments}
          postModalHandler={postModalHandler}
        />
        <CommentForm
          marginTop={
            desc.length !== 0 || comments.length !== 0 ? "20px" : "5px"
          }
          isModal={false}
          postId={postId}
          setComments={setComments}
        />
      </Footer>
    </Article>
  );
};

export default Post;
