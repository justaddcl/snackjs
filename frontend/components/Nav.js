import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
`;

const Nav = props => (
  <StyledNav>
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__item">
          <Link href="/events">
            <a>Events</a>
          </Link>
        </li>
        <li className="nav__item nav__item--ml">
          <Link href="/smallgroups">
            <a>Small Groups</a>
          </Link>
        </li>
      </ul>
    </nav>
  </StyledNav>
);

export default Nav;
