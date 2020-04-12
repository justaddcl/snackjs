import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';

const SINGLE_USER_QUERY = gql`
  query SINGLE_USE_QUERY($id: ID!) {
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

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($data: UpdateUserInput!) {
    updateUser(data: $data) {
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

class UpdateUser extends Component {
  state = {};

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateUser = async (e, updateUserMutation) => {
    e.preventDefault();
    const data = { id: this.props.id, ...this.state };
    console.log('Updating user...');
    console.log(data);
    const res = await updateUserMutation({
      variables: { data },
    })
      .then(() => {
        console.log('User updated!');
      })
      .catch(error => {
        console.error(`Beeg oof. User update failed. Error: ${error}`);
      });
  };

  render() {
    return (
      <Query query={SINGLE_USER_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.user)
            return (
              <p>Beeg oof! No user found for the user id {this.props.id}...</p>
            );
          return (
            <Mutation mutation={UPDATE_USER_MUTATION}>
              {(updateUser, { loading, error }) => (
                <form onSubmit={e => this.updateUser(e, updateUser)}>
                  {error}
                  Update User
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="name">
                      Name
                      <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={data.user.name}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="email">
                      Email
                      <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={data.user.email}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="password">
                      Choose a password
                      <input
                        type="password"
                        id="password"
                        name="password"
                        defaultValue={data.user.password}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="admin">
                      isAdmin?
                      <select
                        name="admin"
                        defaultValue={data.user.admin}
                        onChange={this.handleChange}
                      >
                        <option value="false">False</option>
                        <option value="true">True</option>
                      </select>
                    </label>

                    <label htmlFor="dietaryRestrictions">
                      Dietary restrictions
                      <input
                        type="text"
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        defaultValue={data.user.dietaryRestrictions}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="favoriteSnack">
                      Dietary restrictions
                      <input
                        type="text"
                        id="favoriteSnack"
                        name="favoriteSnack"
                        defaultValue={data.user.favoriteSnack}
                        onChange={this.handleChange}
                      />
                    </label>

                    <button type="submit">Update user</button>
                  </fieldset>
                </form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateUser;
export { UPDATE_USER_MUTATION };
