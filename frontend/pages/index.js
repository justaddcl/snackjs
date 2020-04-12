import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';

const HomePage = styled(ContentContainer)``;

const Home = props => (
  <HomePage>
    <p>We chillin'</p>
  </HomePage>
);

export default Home;
