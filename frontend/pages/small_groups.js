import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ContentContainer from '../components/styles/ContentContainer';

const SmallGroupsPage = styled(ContentContainer)``;

const Smallgroups = props => (
  <SmallGroupsPage>
    <Head>
      <title>Snack App | Small Groups</title>
    </Head>
    <p>All the groups!</p>
  </SmallGroupsPage>
);

export default Smallgroups;
