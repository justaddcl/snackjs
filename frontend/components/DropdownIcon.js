import styled from 'styled-components';

const StyledDropdownIcon = styled.i`
  font-size: 12px;
  line-height: 14px;
  margin-left: 8px;
`;

const DropdownIcon = () => (
  <StyledDropdownIcon>
    <i className="fas fa-chevron-down" />
  </StyledDropdownIcon>
);

export default DropdownIcon;
