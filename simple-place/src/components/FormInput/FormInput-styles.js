import styled from "styled-components";

export const CustomInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  margin: 8px 0;
  color: #282828;
  box-sizing: border-box;
  border: 3px solid ${(props) => (props.bdColor ? props.bdColor : "black")};
  font-size: 16px;
  font-weight: 500;
  font-family: Quicksand;
  -webkit-transition: 0.5s;
  border-radius: 5px;
  transition: 0.5s;
  outline: none;
  &:focus {
    border: 3px solid #5551ff;
  }
`;
// border: 3px solid rgba(151, 71, 255, 1);
