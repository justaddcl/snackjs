import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import propTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    currentUser {
      id
      name
      email
      admin
    }
  }
`;

const CurrentUser = props => (
  <Query query={CURRENT_USER_QUERY}>{payload => props.children(payload)}</Query>
);

CurrentUser.propTypes = {
  children: propTypes.func.isRequired,
};

export default CurrentUser;
export { CURRENT_USER_QUERY };