import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import { Wrapper } from "./ScrollArrow-styles";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <Wrapper onClick={scrollTop} showScroll={showScroll}>
      <Icon pointer type="scrollarrow" width="32px" height="32px" />
    </Wrapper>
  );
};

export default ScrollArrow;
