import Link from 'next/link';
const MobileNav = () => (
  <div>Brrrring it's thine telly!</div>
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
      ${ /* if the user is an admin  */ }
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
      ${ /* end is admin if */ }
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
      <li>${/* log out link */}</li>
      ${ /* else if user not logged in */ }
      <li>${/* link to log in */}</li>
      ${ /* end if user logged in */ }
    </ul>
);

export default MobileNav;
