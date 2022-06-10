import {
  Wrapper,
  NoUserWrapper,
  NoUserText,
  PostsWrapper,
} from "./UserPosts-styles";
import Icon from "../Icon/Icon";
import UserPost from "../UserPost/UserPost";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";

const UserPosts = ({ userId, posts, postsLoaded }) => {
  const dispatch = useDispatch();

  const postsList = posts.map((p) => (
    <UserPost
      img={p.image}
      likes={p.likes}
      comments={p.comments}
      description={p.description}
      id={p.id}
      userId={userId}
      key={p.id}
      dispatch={dispatch}
    ></UserPost>
  ));

  if (!postsLoaded) return <Loader />;

  return (
    <Wrapper>
      {posts.length === 0 && (
        <Wrapper height={"400px"}>
          <NoUserWrapper>
            <Icon type={"framephoto"} width={"90px"} height={"90px"} />
            <NoUserText>There is no posts yet..</NoUserText>
          </NoUserWrapper>
        </Wrapper>
      )}
      {posts.length > 0 && <PostsWrapper>{postsList.reverse()}</PostsWrapper>}
    </Wrapper>
  );
};

export default UserPosts;
