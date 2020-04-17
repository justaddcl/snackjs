import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './CurrentUser';

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION($data: CreateUserInput!) {
    createUser(data: $data) {
      id
      name
      email
      password
      createdAt
    }
  }
`;

class CreateUser extends Component {
  state = {
    name: 'Example Person',
    email: 'example@site.com',
    password: 'password',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_USER_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(createUser, { loading, error }) => (
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const data = { data: { ...this.state } };
              const res = await createUser({ variables: data });
              console.log(res);
              Router.push({
                pathname: '/users',
              });
            }}
          >
            {error ? console.error(`!!!!! Big oof !!!!! ${error}`) : ''}
            Sign up for an account
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
              <button type="submit">Create account</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}

export default CreateUser;
export { CREATE_USER_MUTATION };
