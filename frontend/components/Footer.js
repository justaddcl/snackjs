import styled from 'styled-components';
import ContentContainer from './styles/ContentContainer';

const StyledFooter = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.blueGrey[50]};

  .text {
    color: ${props => props.theme.colors.blueGrey[500]};
    font-size: ${props => props.theme.font.size.mobile.small};
    letter-spacing: 1px;
    text-transform: uppercase;

    @media screen and (min-width: ${props =>
        props.theme.mediaQueries.desktop.small}) {
      font-size: ${props => props.theme.font.size.desktop.small}
    }

    &.right {
      justify-self: end;
    }
  }
`;

const FooterContainer = styled(ContentContainer)`
  align-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
`;

const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      <span className="text left">
        Made with <i className="fas fa-heart"></i> in Austin, TX.
      </span>
      <span className="text right">Soli deo gloria.</span>
    </FooterContainer>
  </StyledFooter>
);

export default Footer;
