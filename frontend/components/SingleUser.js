import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import gql from 'graphql-tag';
import DeleteUser from './DeleteUser';

const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!) {
    user(where: { id: $id }) {
      id
      name
      email
      admin
      dietaryRestrictions
      favoriteSnack
    }
  }
`;

class SingleUser extends Component {
  render() {
    return (
      <Query query={SINGLE_USER_QUERY} variables={{ id: this.props.id }}>
        {({ loading, error, data: { user } }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Beeg oof! ${error}</p>;
          if (!user)
            return <p>Beeg oof! No user was found for id: ${this.props.id}</p>;
          return (
            <>
              <Head>
                <title>Snack App | {user.name}</title>
              </Head>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.admin ? 'has' : 'does not have'} admin privileges</p>
              <p>
                {user.dietaryRestrictions ||
                  'dietary restrictions not specified'}
              </p>
              <p>{user.favoriteSnack || 'no favorite snack (yet... 😉)'}</p>
              <Link
                href={{
                  pathname: 'updateUser',
                  query: { id: user.id },
                }}
              >
                <a>Edit User</a>
              </Link>
              <DeleteUser id={user.id}>Delete User</DeleteUser>
            </>
          );
        }}
      </Query>
    );
  }
}

export default SingleUser;
export { SINGLE_USER_QUERY };
