import React, { useEffect, useState } from "react";
import { Section, EndMessage } from "./Posts-styles";
import Post from "../Post/Post";
import { getPosts } from "../../services/PostsService";
import UsersModal from "../UsersModal/UsersModal";
import { getCookie } from "../../services/CookiesService";
import { userSelectors } from "../../store/user";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";
import { postModalSelectors } from "../../store/postModal";

const Posts = () => {
  const mainUserId = getCookie("id");
  const user = useSelector(userSelectors.getUser());
  const postModal = useSelector(postModalSelectors.getModalInfo());
  const [posts, setPosts] = useState([]);
  const [from, setFrom] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = () => {
    if (from === 0) return;
    getPosts(from, 3)
      .then((res) => res.json())
      .then((data) => {
        setPosts((prevState) => [...prevState, ...data.posts]);
        setFrom((prevState) => prevState + 3);
        setHasMore(data.hasMore);
      });
  };

  const postsList = posts.map((p) => (
    <Post
      key={p.id}
      postId={p.id}
      img={p.image}
      userId={p.userId}
      mainUserId={mainUserId}
      likes={p.likes}
      liked={p.likes.includes(mainUserId)}
      desc={p.description}
      postComments={p.comments}
      setShowModal={setShowModal}
      setPosts={setPosts}
    />
  ));

  useEffect(() => {
    if (!user.user) return;
    if (posts.length) {
      getPosts(0, 3)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setHasMore(true);
          setPosts([...data.posts]);
          // если 3 поста в ленте, потом добавить пост, спуститься вниз и ждать, то последний (третий пост пропадет) при загрузке нового.
          setFrom(3);
        });
    } else {
      getPosts(from, 3)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts((prevState) => [...prevState, ...data.posts]);
          setFrom((prevState) => prevState + 3);
          setHasMore(true);
        });
    }
  }, [user]);

  return (
    <Section>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<Loader postsLoader={true} />}
        endMessage={<EndMessage>Yay! You have seen it all</EndMessage>}
      >
        {postsList}
        {showModal && <UsersModal setShowModal={setShowModal} />}
      </InfiniteScroll>
    </Section>
  );
};

export default Posts;
