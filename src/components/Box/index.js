import styled from "@emotion/styled";
import {
  layout,
  space,
  compose,
  border,
  background,
  color,
} from "styled-system";

const Box = styled.div(compose(layout, space, border, background, color));

export default Box;
