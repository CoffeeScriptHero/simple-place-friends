import { FeedContainer } from "./Feed-styles";
import Posts from "../../components/Posts/Posts";
import SideContent from "../../components/SideContent/SideContent";
import { Outlet } from "react-router-dom";

const Feed = () => {
  return (
    <FeedContainer>
      <Posts />
      <SideContent />
      <Outlet />
    </FeedContainer>
  );
};

export default Feed;
