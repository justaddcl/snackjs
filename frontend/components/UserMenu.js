import Link from 'next/link';
import styled from 'styled-components';
import theme from './styles/theme';
import AuxiliaryDropdown from './styles/AuxiliaryDropdown';
import AuxiliaryDropdownContainer from './styles/AuxiliaryDropdownContainer';
import AuxiliaryDropdownMenu from './styles/AuxiliaryDropdownMenu';
import AuxiliaryDropdownItem from './styles/AuxiliaryDropdownItem';
import AuxiliaryDropdownLink from './styles/AuxiliaryDropdownLink';
import UserAvatar from './UserAvatar';

const DashboardLink = styled.a`
  background: ${theme.colors.indigo[900]};
  border-radius: 4px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  margin-top: 8px;
  padding: 4px 20px;
`;

const UserProfile = styled.div`
  background-color: white;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 48px 208px;
  padding: 24px 32px;
`;

const UserProfileText = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  color: ${theme.colors.indigo[900]};
  font-size: 20px;
  font-weight: 700;
`;

const UserMenuContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const UserMenu = () => (
  <AuxiliaryDropdown className="auxiliary-dropdown">
    <AuxiliaryDropdownContainer>
      <UserProfile>
        <UserAvatar size="48" />
        <UserProfileText>
          <UserName>Current User</UserName>
          <Link href="/">
            <DashboardLink>Dashboard</DashboardLink>
          </Link>
        </UserProfileText>
      </UserProfile>
      <UserMenuContainer>
        <AuxiliaryDropdownMenu>
          <AuxiliaryDropdownItem>
            <Link href="/me">
              <AuxiliaryDropdownLink>Profile</AuxiliaryDropdownLink>
            </Link>
          </AuxiliaryDropdownItem>
          <AuxiliaryDropdownItem>
            <Link href="#">
              <AuxiliaryDropdownLink>My small group</AuxiliaryDropdownLink>
            </Link>
          </AuxiliaryDropdownItem>
          <AuxiliaryDropdownItem>
            <Link href="#">
              <AuxiliaryDropdownLink>
                My Discipleship Community
              </AuxiliaryDropdownLink>
            </Link>
          </AuxiliaryDropdownItem>
          <AuxiliaryDropdownItem>
            <Link href="/me">
              <AuxiliaryDropdownLink>Account settings</AuxiliaryDropdownLink>
            </Link>
          </AuxiliaryDropdownItem>
          <AuxiliaryDropdownItem logout>
            <Link href="/logout">
              <AuxiliaryDropdownLink logout>Log out</AuxiliaryDropdownLink>
            </Link>
          </AuxiliaryDropdownItem>
        </AuxiliaryDropdownMenu>
      </UserMenuContainer>
    </AuxiliaryDropdownContainer>
  </AuxiliaryDropdown>
);

export default UserMenu;
