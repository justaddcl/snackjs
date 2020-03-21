import Link from 'next/link';

const Nav = props => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/smallgroups">
      <a>Small Groups</a>
    </Link>
  </div>
);

export default Nav;
