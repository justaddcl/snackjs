import Link from 'next/link';
import styled, { css } from 'styled-components';
import Nav from './Nav';
import MobileNav from './MobileNav';
import AuxiliaryMenu from './AuxiliaryMenu';
import ContentContainer from './styles/ContentContainer';
import theme from './styles/theme';

const StyledHeader = styled.header`
  background-color: white;
  box-shadow: inset 0 -2px 0 0 ${theme.colors.blueGrey[100]};

  &::before {
    background: linear-gradient(
      135deg,
      ${theme.colors.gradient.purple},
      ${theme.colors.gradient.blue}
    );
    content: '';
    display: block;
    height: 4px;
  }

  .menu {
    background-color: inherit;
    border: none;
    color: ${theme.colors.indigo[900]};
    cursor: pointer;
    display: grid;
    height: inherit;
    margin-left: -16px;
    place-items: center center;
    width: 100%;
    z-index: 99;

    > .icon {
      font-size: 18px;
    }
  }

  .title {
    display: grid;
    height: inherit;
    place-items: center center;

    .link {
      color: ${theme.colors.indigo[900]};
      font-weight: 700;
      margin-left: -48px;
      padding: 18px 24px;
      text-decoration: none;
    }
  }

  @media screen and (min-width: ${theme.mediaQueries.desktop.small}) {
    .title {
      display: grid;
      height: inherit;
      margin-left: 0;

      .link {
        margin-left: 0px;
        padding: 28.5px 0px;
      }
    }

    .menu {
      display: none;
    }
  }
`;

const HeaderContainer = styled(ContentContainer)`
  align-items: center;
  display: grid;
  grid-template-columns: 48px 1fr;
  height: 60px;

  @media screen and (min-width: ${theme.mediaQueries.desktop.small}) {
    grid-gap: 24px;
    grid-template-columns: auto 1fr 1fr;
    height: 81px;
  }
`;

const Header = props => (
  <StyledHeader>
    <HeaderContainer>
      <button
        className="menu"
        type="button"
        ariaLabel="Menu"
        ariaControls="navigation"
      >
        <i className="icon fas fa-bars"></i>
      </button>
      <div className="title">
        <Link href="/">
          <a className="link">Snack App</a>
        </Link>
      </div>
      <Nav />
      <AuxiliaryMenu />
    </HeaderContainer>
    <MobileNav />
  </StyledHeader>
);

export default Header;
