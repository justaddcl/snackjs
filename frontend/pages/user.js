import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';
import SingleUser from '../components/SingleUser';

const UserPageContainer = styled(ContentContainer)``;

const UserPage = props => (
  <UserPageContainer>
    <SingleUser id={props.query.id} />
  </UserPageContainer>
);

export default UserPage;
