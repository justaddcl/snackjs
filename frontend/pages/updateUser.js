import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';
import UpdateUserComponent from '../components/UpdateUser';

const UpdateUserPage = styled(ContentContainer)``;

const UpdateUser = ({ query }) => (
  <UpdateUserPage>
    <Head>
      <title>Snack App | Update User</title>
    </Head>
    <UpdateUserComponent id={query.id} />
  </UpdateUserPage>
);

export default UpdateUser;
