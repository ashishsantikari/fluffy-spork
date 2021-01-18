import styled from "@emotion/styled";
import { typography, space, color } from "styled-system";
import theme from "../../theme";

const ExternalLink = styled.a`
  ${typography}
  ${space}
  ${color}
  
  &:hover {
    color: ${theme.color.blue};
  }
  &:visited {
    color: ${theme.color.blue};
  }
`;
export default ExternalLink;
