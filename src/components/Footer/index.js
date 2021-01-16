import React from 'react';
import styled from '@emotion/styled';

const FooterLayout = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: lowercase;
  color: gray;
`;

const Footer = () => (
  <FooterLayout>
    No cookies are saved. Only usage of local storage is required for proper
    functioning.
  </FooterLayout>
);

export default Footer;
