import React from 'react';
import styled from '@emotion/styled';

const Header = styled.h2`
  text-decoration: underline;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 20px 0;
`;

const ListItem = styled.li`
  padding: 20px 0;
`;

const Dashboard = () => {
  return (
    <div>
      <Header>Most popular repositories of the week</Header>
      <List>
        <ListItem>repo details comes here</ListItem>
      </List>
    </div>
  );
};

export default Dashboard;
