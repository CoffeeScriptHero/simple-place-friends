import styled from "styled-components";

const PD_LEFT = "16px";
//post padding-left distance (description, icons, likes, etc..)

export const Article = styled.article`
  width: 615px;
  min-height: 450px;
  max-height: 1500px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  margin-bottom: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 0 15px ${PD_LEFT};
`;

export const DeleteButton = styled.button`
  border: none;
  margin-left: 10px;
  padding-right: ${(props) => props.pdRight || "0"};
  height: 25px;
  font-size: 14px;
  background: transparent;
  color: #5551ff;
  line-height: normal;
  cursor: pointer;
`;

export const Main = styled.section``;

export const Footer = styled.section``;

export const Image = styled.img.attrs((props) => ({
  src: props.src || "#",
}))`
  width: 100%;
  height: 100%;
  max-height: 1200px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  padding: 6px ${PD_LEFT} 8px;
`;

export const Description = styled.span`
  padding-left: ${PD_LEFT};
  display: block;
  overflow-x: hidden;
`;

export const ShowMore = styled.span`
  color: grey;
  font-size: 14px;
  cursor: pointer;
`;

export const Commentaries = styled.div``;
