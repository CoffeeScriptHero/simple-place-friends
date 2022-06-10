import styled from "styled-components";

const PD_LEFT = "16px";

export const Wrapper = styled.div``;

export const PostModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;

export const ModalContent = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  position: relative;
  background: #000;
  @media (min-width: 1400px) {
    width: 851px;
    height: 851px;
  }
  @media (max-width: 1550px) {
    min-width: 500px;
    max-width: 715px;
    height: 715px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src || "#",
}))`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const PostContent = styled.div`
  @media (min-width: 1550px) {
    width: 500px;
    height: 851px;
  }
  @media (max-width: 1550px) {
    width: 500px;
    height: 715px;
  }
  background: #fff;
`;

export const PostHeader = styled.header`
  padding: 15px 35px 15px ${PD_LEFT};
  display: flex;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const PostBody = styled.div`
  padding: 16px 35px 16px ${PD_LEFT};
  @media (min-width: 1550px) {
    height: 600px;
  }
  @media (max-width: 1550px) {
    height: 470px;
  }
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
`;

export const PostFooter = styled.div``;
