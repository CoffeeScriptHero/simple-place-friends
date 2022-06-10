import styled from "styled-components";
import { LinkMessage } from "../../App-styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  text-align: center;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
`;

export const Message = styled.span`
  margin-top: 40px;
  font-size: 16px;
  line-height: 24px; ;
`;

export const MainPageLink = styled(LinkMessage)`
  color: #5551ff;
`;
