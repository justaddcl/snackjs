import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';
import SigninComponent from '../components/Signin';

const SignupPage = styled(ContentContainer)``;

const Signin = props => (
  <SignupPage>
    <Head>
      <title>Snack App | Create an account </title>
    </Head>
    <SigninComponent />
  </SignupPage>
);

export default Signin;
