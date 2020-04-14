import React from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { perPage } from '../config';
import { pluralize } from '../lib/wordHelpers';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    usersConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Beeg oof. An error has transpired. {error}</p>;
        const { count } = data.usersConnection.aggregate;
        const pages = Math.ceil(count / perPage);
        const { page } = props;
        let item = props.item.charAt(0).toUpperCase() + props.item.slice(1, -1);
        item = pluralize(item, count);
        return (
          <>
            {page > 1 && (
              <Link
                prefetch
                href={{
                  pathname: 'users',
                  query: {
                    page: page - 1,
                  },
                }}
              >
                <a>Previous page</a>
              </Link>
            )}
            <p>
              Page {page} of {pages}
            </p>
            <p>
              {count} {item} found.
            </p>
            {page < pages && (
              <Link
                prefetch
                href={{
                  pathname: 'users',
                  query: {
                    page: page + 1,
                  },
                }}
              >
                <a>Next page</a>
              </Link>
            )}
          </>
        );
      }}
    </Query>
  );
};

export default Pagination;
