import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  &:not(:nth-of-type(3n)) {
    margin-right: 28px;
  }
  text-align: center;
`;

export const PostPreview = styled.img.attrs((props) => ({
  src: props.img || "#",
}))`
  width: 293px;
  height: 293px;
  object-fit: cover;
  cursor: pointer;
  transition: 0.2s;
  z-index: 100;
  &:hover {
    filter: blur(1px);
    filter: brightness(70%);
  }
`;

export const Stat = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25px;
  display: none;
  pointer-events: none;
  ${Wrapper}:hover & {
    display: flex;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  &:nth-child(2) {
    margin-left: 10px;
  }
`;

export const InfoText = styled.span`
  color: white;
  font-weight: 500;
  margin-left: 5px;
  font-family: Quicksand;
`;
