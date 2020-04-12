import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';
import UpdateUserComponent from '../components/UpdateUser';

const UpdateUserPage = styled(ContentContainer)``;

const UpdateUser = ({ query }) => (
  <UpdateUserPage>
    <UpdateUserComponent id={query.id} />
  </UpdateUserPage>
);

export default UpdateUser;
