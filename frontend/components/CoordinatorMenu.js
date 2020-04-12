import Link from 'next/link';
import styled from 'styled-components';
import AuxiliaryDropdown from './styles/AuxiliaryDropdown';
import AuxiliaryDropdownContainer from './styles/AuxiliaryDropdownContainer';
import AuxiliaryDropdownItemIcon from './AuxiliaryDropdownItemIcon';
import AuxiliaryDropdownMenu from './styles/AuxiliaryDropdownMenu';
import AuxiliaryDropdownItem from './styles/AuxiliaryDropdownItem';
import AuxiliaryDropdownLink from './styles/AuxiliaryDropdownLink';

const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const ItemDescription = styled.div`
  font-size: 14px;
`;

const CoordinatorMenu = () => (
  <AuxiliaryDropdown className="auxiliary-dropdown">
    <AuxiliaryDropdownContainer withPadding>
      <AuxiliaryDropdownMenu coordinator>
        <AuxiliaryDropdownItem>
          <Link href="/assignments/create">
            <AuxiliaryDropdownLink coordinator>
              <AuxiliaryDropdownItemIcon icon="user-plus" />
              <div className="coordinator-dropdown__text">
                <ItemTitle>Assign snack</ItemTitle>
                <ItemDescription>
                  Assign a user to bring a snack for an event
                </ItemDescription>
              </div>
            </AuxiliaryDropdownLink>
          </Link>
        </AuxiliaryDropdownItem>
        <AuxiliaryDropdownItem>
          <Link href="/events/create">
            <AuxiliaryDropdownLink coordinator>
              <AuxiliaryDropdownItemIcon icon="calendar-day" />
              <div className="coordinator-dropdown__text">
                <ItemTitle>Create an event</ItemTitle>
                <ItemDescription>
                  Create a new event for your small group or Discipleship
                  Community
                </ItemDescription>
              </div>
            </AuxiliaryDropdownLink>
          </Link>
        </AuxiliaryDropdownItem>
      </AuxiliaryDropdownMenu>
    </AuxiliaryDropdownContainer>
  </AuxiliaryDropdown>
);

export default CoordinatorMenu;
