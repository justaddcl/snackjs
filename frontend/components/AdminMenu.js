import Link from 'next/link';
import styled from 'styled-components';
import theme from './styles/theme';
import AuxiliaryDropdown from './styles/AuxiliaryDropdown';
import AuxiliaryDropdownContainer from './styles/AuxiliaryDropdownContainer';
import AuxiliaryDropdownMenu from './styles/AuxiliaryDropdownMenu';
import AuxiliaryDropdownItem from './styles/AuxiliaryDropdownItem';
import AuxiliaryDropdownLink from './styles/AuxiliaryDropdownLink';

const AdminMenu = () => (
  <AuxiliaryDropdown className="auxiliary-dropdown">
    <AuxiliaryDropdownContainer withPadding>
      <AuxiliaryDropdownMenu admin>
        <AuxiliaryDropdownItem>
          <Link href="/users">
            <AuxiliaryDropdownLink>Users</AuxiliaryDropdownLink>
          </Link>
        </AuxiliaryDropdownItem>
        <AuxiliaryDropdownItem>
          <Link href="/user_roles">
            <AuxiliaryDropdownLink>User roles</AuxiliaryDropdownLink>
          </Link>
        </AuxiliaryDropdownItem>
        <AuxiliaryDropdownItem>
          <Link href="/small_groups">
            <AuxiliaryDropdownLink>Small groups</AuxiliaryDropdownLink>
          </Link>
        </AuxiliaryDropdownItem>
        <AuxiliaryDropdownItem>
          <Link href="/discipleship_communities/">
            <AuxiliaryDropdownLink>
              Discipleship Communities
            </AuxiliaryDropdownLink>
          </Link>
        </AuxiliaryDropdownItem>
        <AuxiliaryDropdownItem>
          <Link href="/events">
            <AuxiliaryDropdownLink>Events</AuxiliaryDropdownLink>
          </Link>
        </AuxiliaryDropdownItem>
        <AuxiliaryDropdownItem>
          <Link href="/assignments">
            <AuxiliaryDropdownLink>Assignments</AuxiliaryDropdownLink>
          </Link>
        </AuxiliaryDropdownItem>
      </AuxiliaryDropdownMenu>
    </AuxiliaryDropdownContainer>
  </AuxiliaryDropdown>
);

export default AdminMenu;
