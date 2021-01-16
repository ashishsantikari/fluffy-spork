import React from 'react';
import styled from '@emotion/styled';

const HeaderLayout = styled.h1`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const Header = () => <HeaderLayout>Repo Viewer</HeaderLayout>;

export default Header;
