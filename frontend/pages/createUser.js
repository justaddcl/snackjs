import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';
import CreateUserComponent from '../components/CreateUser';

const CreateUserPage = styled(ContentContainer)``;

const CreateUser = props => (
  <CreateUserPage>
    <Head>
      <title>Snack App | Create User </title>
    </Head>
    <CreateUserComponent />
  </CreateUserPage>
);

export default CreateUser;
