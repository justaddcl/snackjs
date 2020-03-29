import App, { Container } from 'next/app';
import Page from '../components/Page';
import { noFramePathnames } from '../config';

class SnackApp extends App {
  render() {
    const { Component, router } = this.props;
    const noFrame = noFramePathnames.some(path => path === router.pathname);
    return (
      <Container>
        <Page noFrame={noFrame}>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default SnackApp;
