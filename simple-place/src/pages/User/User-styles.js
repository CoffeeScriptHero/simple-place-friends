import styled from "styled-components";
import { MainContainer } from "../../App-styles";

export const UserContainer = styled(MainContainer)`
  width: 935px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  padding: 0 0 50px 0;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const Username = styled.div.attrs((props) => ({
  contentEditable: props.editableUsername ? true : false,
}))`
  font-size: 26px;
  max-height: 40px;
  width: 300px;
  padding-left: 5px;
  padding-bottom: 2px;
  &[contenteditable="true"] {
    white-space: nowrap;
    width: 300px;
    overflow: hidden;
    outline: 2px double #5551ff;
  }
  &[contenteditable="true"] br {
    display: none;
  }
  &[contenteditable="true"] * {
    display: inline;
    white-space: nowrap;
  }
`;

export const UsernameWrapper = styled.div`
  position: relative;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
  position: absolute;
  bottom: -22px;
`;

export const UserInfo = styled.section`
  margin: 0 0 0 25px;
`;

export const InfoText = styled.span`
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "400"};
  margin-right: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:not(:first-child) {
    cursor: pointer;
  }
`;

export const Number = styled.span`
  font-weight: 600;
`;

export const AccountInfo = styled.div`
  margin: 25px 0 0 0;
`;

export const SubscribeButton = styled.button`
  width: 140px;
  background: #5551ff;
  border: none;
  color: white;
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
  padding: 5px 10px;
  margin: 30px 0 0 0;
`;
