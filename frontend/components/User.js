import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <h2>
          <Link
            href={{
              pathname: '/user',
              query: {
                id: user.id,
              },
            }}
          >
            <a>{user.name}</a>
          </Link>
        </h2>
        <p>{user.email}</p>
        <p>{user.password}</p>
        <p>{user.admin}</p>
        <p>{user.dietaryRestriction}</p>
        <p>{user.favoriteSnack}</p>
      </div>
    );
  }
}
