import Link from 'next/link';
import styled from 'styled-components';
import theme from './styles/theme';

const StyledNav = styled.nav`
  display: none;
  height: inherit;

  .nav-menu {
    align-items: stretch;
    display: flex;
    height: inherit;
  }

  .nav__item {
    display: grid;
    place-items: stretch start;

    &:hover:after {
      animation: hover-underline 0.3s cubic-bezier(0.68, 0, 0.265, 1.3);
      background: linear-gradient(
        135deg,
        ${theme.colors.gradient.purple},
        ${theme.colors.gradient.blue}
      );
      /* box-shadow: inset 0 -2px 0 0 #111; */
      content: '';
      display: block;
      height: 4px;
      margin-top: -4px;
      width: 100%;
    }

    &.ml {
      margin-left: 24px;
    }
  }

  .link {
    color: ${theme.colors.blueGrey[700]};
    font-size: 14px;
    font-weight: 700;
    padding: 30px 12px;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.blueGrey[900]};
    }
  }

  @media screen and (min-width: ${theme.mediaQueries.desktop.small}) {
    display: block;
  }
`;

const Nav = props => (
  <StyledNav>
    <ul className="nav-menu">
      <li className="nav__item">
        <Link href="/events">
          <a className="link">Events</a>
        </Link>
      </li>
      <li className="nav__item ml">
        <Link href="/smallgroups">
          <a className="link">Small Groups</a>
        </Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
