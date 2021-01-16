import styled from '@emotion/styled';
import { system, compose, color, space, typography } from 'styled-system';

// eslint-disable-next-line no-unused-vars
const listStyleType = system({
  prop: 'listStyle',
  cssProp: 'listStyleType',
});

export const List = styled.ul(
  compose(
    color,
    space,
    typography,
    system({
      listStyleType: true,
    })
  )
);
