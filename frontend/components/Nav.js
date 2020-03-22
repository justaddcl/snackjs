import Link from 'next/link';

const Nav = props => (
  <div>
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
  </div>
);

export default Nav;
