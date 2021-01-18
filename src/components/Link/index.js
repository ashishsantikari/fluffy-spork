import styled from "@emotion/styled";
import { typography, compose, layout } from "styled-system";
import { Link as WLink } from "wouter";

const Link = styled(WLink)(compose(typography, layout));
export default Link;
