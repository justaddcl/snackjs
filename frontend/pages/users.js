import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';
import Users from '../components/Users'

const UsersPageContainer = styled(ContentContainer)``;

const UsersPage = props => (
  <UsersPageContainer>
    <Users />
  </UsersPageContainer>
);

export default UsersPage;
