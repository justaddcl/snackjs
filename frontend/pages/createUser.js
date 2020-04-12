import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';
import CreateUserComponent from '../components/CreateUser';

const CreateUserPage = styled(ContentContainer)``;

const CreateUser = props => (
  <CreateUserPage>
    <CreateUserComponent />
  </CreateUserPage>
);

export default CreateUser;
