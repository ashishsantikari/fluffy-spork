import styled from "@emotion/styled";
import {
  flexbox,
  layout,
  space,
  compose,
  border,
  background,
  color,
  system,
} from "styled-system";

// eslint-disable-next-line no-unused-vars
const boxShadow = system({
  prop: "boxShadow",
  cssProp: "boxShadow",
});

const Flex = styled.div`
  display: flex;
  ${flexbox}
  ${layout}
  ${space}
  ${compose}
  ${border}
  ${background}
  ${color}
  ${system({
    boxShadow: true,
  })}
`;

export default Flex;
