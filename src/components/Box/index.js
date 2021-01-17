import styled from "@emotion/styled";
import {
  layout,
  space,
  compose,
  border,
  background,
  color,
  system,
} from "styled-system";

// eslint-disable-next-line no-unused-vars
const boxSizing = system({
  prop: "boxSizing",
  cssProp: "boxSizing",
});

const Box = styled.div(
  compose(
    layout,
    space,
    border,
    background,
    color,
    system({
      boxSizing: true,
    })
  )
);

export default Box;
