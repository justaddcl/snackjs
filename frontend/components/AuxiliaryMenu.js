import Link from 'next/link';
import styled from 'styled-components';
import theme from './styles/theme';
import DropdownIcon from './DropdownIcon';
import AdminMenu from './AdminMenu';
import CoordinatorMenu from './CoordinatorMenu';
import UserMenu from './UserMenu';
import UserAvatar from './UserAvatar';

const StyledAuxiliaryMenu = styled.ul`
  grid-column: -1;
  display: none;

  @media screen and (min-width: ${theme.mediaQueries.desktop.small}) {
    align-items: center;
    display: flex;
    height: inherit;
  }
`;

const Item = styled.li`
  display: grid;
  place-items: center start;
  position: relative;

  &:hover .auxiliary-dropdown {
    opacity: 1;
    /* transition: opacity 0.3s ease-in, transform 0.3s cubic-bezier(0.68, 0, 0.265, 1.3) 0.3s; */
    transition: opacity 0.3s ease-in;
    transform: matrix(1, 0, 0, 1, 64, 53);
  }

  &:hover:after {
    animation: hover-underline 0.3s cubic-bezier(0.68, 0, 0.265, 1.3);
    background: linear-gradient(
      135deg,
      ${theme.colors.gradient.purple},
      ${theme.colors.gradient.blue}
    );
    content: "";
    display: block;
    height: 4px;
    margin-top: -4px;
    width: 100%;
  }

  &.ml {
    margin-left: 24px;
  }
`;

const ItemName = styled.span`
  color: ${theme.colors.blueGrey[700]};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: ${props => (props.avatar ? '24.5px 8px' : '30px 8px')};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.blueGrey[900]};
  }
`;

const AuxiliaryMenuLink = ItemName.withComponent('a');

const AuxiliaryMenu = () => (
  <StyledAuxiliaryMenu>
    {/* if user logged in */}
    <Item>
      <ItemName>
        Admin
        <DropdownIcon />
      </ItemName>
      <AdminMenu />
    </Item>
    <Item>
      <ItemName>
        Coordinator
        <DropdownIcon />
      </ItemName>
      <CoordinatorMenu />
    </Item>
    <Item>
      <Link href="/me">
        <AuxiliaryMenuLink avatar>
          <UserAvatar size="32" />
        </AuxiliaryMenuLink>
      </Link>
      <UserMenu />
    </Item>
    <Item>
      <Link href="/login">
        <AuxiliaryMenuLink>Log in</AuxiliaryMenuLink>
      </Link>
    </Item>
  </StyledAuxiliaryMenu>
);

export default AuxiliaryMenu;
