import styled from 'styled-components';

const AuxiliaryDropdownItem = styled.li`
  padding-left: 32px;
  padding-right: 32px;

  ${props => props.logout && `margin-top: 16px;`}
`;

export default AuxiliaryDropdownItem;
