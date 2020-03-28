import styled from 'styled-components';

const AuxiliaryDropdownMenu = styled.ul`
  display: grid;
  grid-gap: ${props => (props.coordinator ? '32px' : '16px')};
  grid-template-columns: ${props => (props.admin ? '224px' : '1fr')};
`;

export default AuxiliaryDropdownMenu;
