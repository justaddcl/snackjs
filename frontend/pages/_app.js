import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import Page from '../components/Page';
import { noFramePathnames } from '../config';

class SnackApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, router, apollo, pageProps } = this.props;
    const noFrame = noFramePathnames.some(path => path === router.pathname);
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page noFrame={noFrame}>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(SnackApp);
