import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './CurrentUser';
import theme from './styles/theme';

const SignoutButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.blueGrey[500]};
  cursor: pointer;
  padding: 0;
  text-align: left;
  width: 100%;

  &:hover {
    color: ${theme.colors.blueGrey[300]};
  }
`;

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUATION {
    signout {
      message
    }
  }
`;

const Signout = props => (
  <Mutation
    mutation={SIGNOUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signout => (
      <SignoutButton type="button" onClick={signout}>
        Sign Out
      </SignoutButton>
    )}
  </Mutation>
);

export default Signout;
