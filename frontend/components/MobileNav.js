import Link from 'next/link';
import styled from 'styled-components';
import theme from './styles/theme';

const StyledMobileNav = styled.nav`
  bottom: 0;
  color: ${theme.colors.blueGrey[700]};
  height: calc(100vh - 64px);
  opacity: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  transform: translate3d(-100vw, 0, 0);
  transition: all 0.3s cubic-bezier(0.68, 0, 0.265, 1.3);
  width: 100vw;
  z-index: 999;

  &.open {
    background-color: white;
    opacity: 1;
    transform: translate3d(0vw, 0, 0);
  }

  .menu {
    list-style: none;
    padding: 0;
  }

  .header {
    color: ${theme.colors.blueGrey[500]};
    font-size: 18px;
    letter-spacing: 0.5px;
    padding: 8px 48px;
    text-transform: uppercase;
  }

  .link {
    color: ${theme.colors.blueGrey[700]};
    display: block;
    font-size: 16px;
    padding: 8px 48px;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.blueGrey[500]};
    }

    &.medium {
      font-size: 30px;
      font-weight: 700;
    }

    &.large {
      font-size: 30px;
      font-weight: 700;
      padding: 12px 48px;
    }

    &.logout {
      color: ${theme.colors.blueGrey[500]};

      &:hover {
        color: ${theme.colors.blueGrey[300]};
      }
    }

    &.user {
      display: grid;
      grid-template-columns: auto 1fr;
    }
  }

  .divider {
    background-color: ${theme.colors.indigo[50]};
    height: 2px;
    margin: 12px 48px;
  }

  .user-name {
    font-size: 18px;
    font-weight: 700;
    margin-left: 24px;
  }

  @media (min-width: ${theme.mediaQueries.desktop.small}) {
    display: none;
  }
`;

const MobileNav = () => (
  <StyledMobileNav className="nav-mobile">
    <ul className="menu">
      {/* if logged_in? */}
      <li>
        <Link href="/events">
          <a className="link large">Events</a>
        </Link>
      </li>
      <li>
        <Link href="/smallgroups">
          <a className="link large">Events</a>
        </Link>
      </li>
      { /* if the user is an admin  */ }
      <li className="divider"></li>
      <li className="header">Admin</li>
      <li>
        <a href="#" className="link medium">
          Assign snack
        </a>
      </li>
      <li>
        <a href="#" className="link medium">
          Create an event
        </a>
      </li>
      { /* end is admin if */ }
      <li className="divider"></li>
      <li>
        <a href="#" className="link user">
          <img
            className="user-avatar user-avatar--32 user-avatar--header user-avatar"
            src="https://source.unsplash.com/collection/8470962/32x32"
            alt="User avatar"
          />
          <span className="user-name">Current user</span>
        </a>
      </li>
      <li>
        <a href="#" className="link small">
          Profile
        </a>
      </li>
      <li>
        <a href="#" className="link small">
          My small group
        </a>
      </li>
      <li>
        <a href="#" className="link small">
          My Discipleship Community
        </a>
      </li>
      <li>
        <a href="/settings" className="link small">
          Accounts settings
        </a>
      </li>
      <li>{/* log out link */}</li>
      { /* else if user not logged in */ }
      <li>{/* link to log in */}</li>
      { /* end if user logged in */ }
    </ul>
  </StyledMobileNav>
);

export default MobileNav;
