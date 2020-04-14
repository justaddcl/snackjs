import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import ContentContainer from '../components/styles/ContentContainer';
import Users from '../components/Users';

const UsersPageContainer = styled(ContentContainer)``;

const UsersPage = props => (
  <UsersPageContainer>
    <Head>
      <title>Snack App | Users</title>
    </Head>
    <Users page={parseInt(props.query.page) || 1} />
  </UsersPageContainer>
);

export default UsersPage;
