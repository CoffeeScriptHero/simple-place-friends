import styled from "styled-components";

export const Wrapper = styled.div``;

export const ModalContent = styled.div`
  width: 400px;
  height: 400px;
  background: white;
  border-radius: 3%;
  overflow-x: hidden;
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid #dbdbdb;
  text-align: center;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`;

export const UsersWrapper = styled.div`
  height: 358px;
  overflow-y: auto;
  border-radius: 3%;
  text-align: ${(props) => (props.noUsers ? "center" : "left")};
  display: ${(props) => (props.noUsers ? "flex" : "block")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.span`
  font-weight: 600;
  margin: 0 auto;
`;

export const CrossWrapper = styled.div``;

export const NoPeopleText = styled.span`
  display: block;
  margin: 10px 0 70px 0;
`;
