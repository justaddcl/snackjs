import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
import Pagination from './Pagination';
import { perPage } from '../config';

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY($first: Int = ${perPage}, $skip: Int = 0) {
    users(
      first: $first, skip: $skip, orderBy: createdAt_DESC
    ) {
      id
      name
      email
      password
      admin
      dietaryRestrictions
      favoriteSnack
    }
  }
`;

class Users extends Component {
  render() {
    return (
      <div>
        <p>Users!</p>
        <Pagination page={this.props.page} item="users" />
        <Query
          query={ALL_USERS_QUERY}
          variables={{ skip: perPage * (this.props.page - 1) }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div>
                {data.users.map(user => (
                  <User user={user} key={user.id} />
                ))}
              </div>
            );
          }}
        </Query>
        <Pagination page={this.props.page} item="users" />
      </div>
    );
  }
}

export default Users;
export { ALL_USERS_QUERY };
