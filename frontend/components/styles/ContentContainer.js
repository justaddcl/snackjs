import styled from 'styled-components';
import theme from './theme';

const ContentContainer = styled.div`
  padding-left: ${theme.layout.padding.small};
  padding-right: ${theme.layout.padding.small};
  position: relative;

  /* tablet styles */
  @media screen and (min-width: ${theme.mediaQueries.desktop.small}) {
    padding-left: ${theme.layout.padding.medium};
    padding-right: ${theme.layout.padding.medium};
  }

  @media screen and (min-width: ${theme.mediaQueries.desktop.large}) {
    padding-left: ${theme.layout.padding.large};
    padding-right: ${theme.layout.padding.large};
  }
`;

export default ContentContainer;
