import styled from 'styled-components';

const StyledAuxiliaryDropdownItemIcon = styled.div`
  background-color: white;
  border-radius: 100%;
  display: grid;
  height: 36px;
  place-content: center center;
  width: 36px;
`;

const AuxiliaryDropdownItemIcon = props => (
  <StyledAuxiliaryDropdownItemIcon>
    <i className={`fas fa-${props.icon}`} />
  </StyledAuxiliaryDropdownItemIcon>
);

export default AuxiliaryDropdownItemIcon;
