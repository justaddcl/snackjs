import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './CurrentUser';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($data: SigninInput) {
    signin(data: $data) {
      id
      name
      password
    }
  }
`;

class Signin extends Component {
  state = {
    email: 'admin@snack.app',
    password: 'password',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { loading, error }) => (
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const data = { data: { ...this.state } };
              const res = await signin({ variables: data });
              this.setState({ email: '', password: '' });
              Router.push({
                pathname: '/',
              });
            }}
          >
            {error ? console.error(`!!!!! Big oof !!!!! ${error}`) : ''}
            Sign into your account
            <fieldset disabled={loading} aria-busy={loading}>
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
              <button type="submit">Sign in</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}

export default Signin;
