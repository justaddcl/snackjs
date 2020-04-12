import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router'
import gql from 'graphql-tag';

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION($data: CreateUserInput!) {
    createUser(data: $data) {
      id
      name
      email
      password
      admin
      dietaryRestrictions
      favoriteSnack
      createdAt
      updatedAt
    }
  }
`;

class CreateUser extends Component {
  state = {
    name: 'Example Person',
    email: 'example@site.com',
    password: 'password',
    admin: true,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const data = { data: { ...this.state } };
    return (
      <Mutation mutation={CREATE_USER_MUTATION} variables={data}>
        {(createUser, { loading, error }) => (
          <form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createUser();
              console.log(res);
              Router.push({
                pathname: '/users',
              });
            }}
          >
            {error}
            Create User
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="email">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="password">
                Choose a password
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="admin">
                isAdmin?
                <select
                  name="admin"
                  required
                  value={this.state.admin}
                  onChange={this.handleChange}
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </label>
              <button type="submit">Create users</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}

export default CreateUser;
export { CREATE_USER_MUTATION };
