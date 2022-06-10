import styled from "styled-components";

export const Wrapper = styled.div`
  width: 340px;
  display: ${(props) => (props.publish ? "flex" : "block")};
  justify-content: end;
`;

export const Form = styled.form``;

export const TextAreaWrapper = styled.div`
  position: relative;
  height: 210px;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const TextArea = styled.textarea`
  width: 310px;
  height: 170px;
  font-size: 15px;
  line-height: 24px;
  font-family: "Quicksand";
  padding: 0 16px;
  overflow: auto;
  outline: none;
  resize: none;
  border: none;
`;

export const PickerWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
`;

export const SmileWrapper = styled.div`
  position: absolute;
  left: 16px;
`;
