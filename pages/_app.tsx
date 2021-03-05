import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../util/apollo-client';
import '../styles/index.css'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>)
}

export default withData(MyApp)
