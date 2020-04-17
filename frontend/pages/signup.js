import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';
import SignupComponent from '../components/Signup';

const SignupPage = styled(ContentContainer)``;

const Signup = props => (
  <SignupPage>
    <Head>
      <title>Snack App | Create an account </title>
    </Head>
    <SignupComponent />
  </SignupPage>
);

export default Signup;
