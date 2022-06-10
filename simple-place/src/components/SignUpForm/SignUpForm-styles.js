import styled from "styled-components";
import { Logo } from "../../App-styles";

export const FormikWrapper = styled.div`
  width: 300px;
  font-family: Quicksand;
`;

export const SignUpLogo = styled(Logo)`
  display: block;
  text-align: center;
  font-size: 24px;
  margin-bottom: 6px;
`;

export const RequiredMessage = styled.p`
  color: red;
  font-size: 16px;
  margin: 0;
  text-align: center;
  font-weight: 500;
`;

export const LogInOptions = styled.div`
  color: #0009;
  text-align: center;
  font-weight: 500;
`;

export const LogInLink = styled.span`
  cursor: pointer;
  color: #5551ff;
  text-decoration: none;
  margin-left: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: "submit",
  value: "submit",
})`
  background: #000;
  color: #fff;
  cursor: pointer;
  margin: 8px 0 15px 0;
  width: 100%;
  height: 50px;
  font-size: 16px;
  border-radius: 5px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: transform 0.2s;
  transform: translate(0);
  text-align: center;
  font-family: Quicksand;
  font-weight: 600;
  &:hover:not(:disabled):not(:active) {
    transform: translateY(-2px);
  }
`;
