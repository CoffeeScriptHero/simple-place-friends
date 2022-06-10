import styled from "styled-components";

export const Form = styled.form`
  margin-top: ${(props) => props.marginTop || "20px"};
  height: 100%;
`;

export const SmileWrapper = styled.div`
  position: absolute;
  top: ${(props) => (props.isModal ? "12px" : "none")};
  left: 8px;
`;

export const PickerWrapper = styled.div`
  position: absolute;
  bottom: 45px;
  left: 0;
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
  padding: 10px 7px 10px 7px;
  position: relative;
`;

export const TextArea = styled.textarea`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  outline: none;
  border: none;
  resize: none;
  overflow-y: ${(props) => (props.isFullText ? "scroll" : "hidden")};
  box-sizing: border-box;
  margin-left: 30px;
  width: 83%;
  font-size: 14px;
  height: 22px;
`;

export const Submit = styled.button.attrs((props) => ({
  disabled: props.isActive ? false : true,
}))`
  border: none;
  margin-left: 10px;
  padding: 5px 0 0 0;
  height: 25px;
  font-size: 14px;
  background: transparent;
  color: #5551ff;
  line-height: normal;
  position: ${(props) => (props.isModal ? "absolute" : "static")};
  right: 15px;
  top: 10px;
  opacity: ${(props) => (props.isActive ? "1" : "0.3")};
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
`;
