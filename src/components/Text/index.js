import styled from "@emotion/styled";
import {
  system,
  typography,
  space,
  compose,
  color,
  layout,
} from "styled-system";

// eslint-disable-next-line no-unused-vars
const textDecoration = system({
  prop: "textDecoration",
  cssProp: "textDecoration",
});

// eslint-disable-next-line no-unused-vars
const textTransform = system({
  props: "textTransform",
  cssProp: "textTransform",
});

const Text = styled.span(
  compose(
    typography,
    space,
    color,
    layout,
    system({
      textDecoration: true,
      textTransform: true,
    })
  )
);

export default Text;
