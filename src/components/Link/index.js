import styled from "@emotion/styled";
import { typography, space, compose, layout } from "styled-system";
import { Link as WLink } from "wouter";

const Link = styled(WLink)(compose(typography, space, layout));
export default Link;
