import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled, { css } from 'styled-components';
import Nav from './Nav';
import MobileNav from './MobileNav';
import AuxiliaryMenu from './AuxiliaryMenu';
import ContentContainer from './styles/ContentContainer';
import theme from './styles/theme';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

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

  .menu-button {
    background-color: inherit;
    border: none;
    color: ${theme.colors.indigo[900]};
    cursor: pointer;
    display: grid;
    height: inherit;
    margin-left: -16px;
    place-items: center center;
    width: 100%;

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

    .menu-button {
      display: none;
    }
  }
`;

const HeaderContainer = styled(ContentContainer)`
  align-items: center;
  display: grid;
  grid-template-columns: 48px 1fr;
  height: 60px;
  z-index: 9;

  @media screen and (min-width: ${theme.mediaQueries.desktop.small}) {
    grid-gap: 24px;
    grid-template-columns: auto 1fr 1fr;
    height: 81px;
  }
`;

const MobileNavOverlay = styled.div`
  display: none;

  &.mobile-nav-visible {
    background-color: ${theme.colors.blueGrey[900]}55;
    display: block;
    height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: 1;

    @media screen and (min-width: ${theme.mediaQueries.desktop.small}) {
      display: none;
    }
  }
`;

const toggleMobileMenu = e => {
  e.currentTarget.firstChild.classList.toggle('fa-times');
  e.currentTarget.firstChild.classList.toggle('fa-bars');
  document.querySelector('nav.nav-mobile').classList.toggle('open');
  document
    .querySelector('div[class*="MobileNavOverlay"]')
    .classList.toggle('mobile-nav-visible');
};

const Header = props => (
  <StyledHeader>
    <HeaderContainer>
      <button
        className="menu-button"
        type="button"
        ariaLabel="Menu"
        ariaControls="navigation"
        onClick={toggleMobileMenu}
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
    <MobileNavOverlay />
  </StyledHeader>
);

export default Header;
