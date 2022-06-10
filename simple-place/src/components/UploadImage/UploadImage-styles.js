import styled from "styled-components";

export const UploadImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  justify-content: center;
  overflow: hidden;
  height: ${(props) => props.height || "calc(720px - 44px)"};
  border-right: ${(props) =>
    props.lastStage ? "1px solid rgba(var(--b6a, 219, 219, 219), 1)" : "none"};
`;

export const InnerUploadWrapper = styled.div``;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.src || "#",
}))`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const ErrorText = styled.span`
  color: red;
  font-weight: 700;
  display: block;
  text-align: center;
`;

export const UploadButton = styled.button`
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  background: #5551ff;
  font-weight: 700;
  border-radius: 3%;
  width: 160px;
  height: 30px;
  margin-bottom: 30px;
`;
