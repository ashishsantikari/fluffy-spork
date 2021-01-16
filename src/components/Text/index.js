import styled from '@emotion/styled';
import { system, typography, space, compose, color } from 'styled-system';

// eslint-disable-next-line no-unused-vars
const textDecoration = system({
  prop: 'textDecoration',
  cssProp: 'textDecoration',
});

// eslint-disable-next-line no-unused-vars
const textTransform = system({
  props: 'textTransform',
  cssProp: 'textTransform',
});

const Text = styled.span(
  compose(
    typography,
    space,
    color,
    system({
      textDecoration: true,
      textTransform: true,
    })
  )
);

export default Text;
