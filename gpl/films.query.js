import gql from "graphql-tag";

const FILMS_QUERY = gql`
  query Films {
    allFilms {
      totalCount
      films {
        title
        planetConnection {
          planets {
            name
          }
        }
      }
    }
  }
`;

export default FILMS_QUERY;
