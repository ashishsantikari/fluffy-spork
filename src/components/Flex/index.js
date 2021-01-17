import styled from "@emotion/styled";
import {
  flexbox,
  layout,
  space,
  compose,
  border,
  background,
  color,
} from "styled-system";

const Flex = styled.div`
  display: flex;
  ${flexbox}
  ${layout}
  ${space}
  ${compose}
  ${border}
  ${background}
  ${color}
`;

export default Flex;
