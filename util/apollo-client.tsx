import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

// const GRAPHQL_URL = `https://graphql.org/swapi-graphql/`;
const GRAPHQL_URL = 'https://api.graphql.jobs/';

export default withApollo(
  ({ initialState }) => {
    const link = createHttpLink({
      fetch,
      uri: GRAPHQL_URL
    });

    return new ApolloClient({
      link: link,
      cache: new InMemoryCache()
        .restore(initialState || {}),
    })
  }
);
