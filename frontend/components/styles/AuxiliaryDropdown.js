import styled from 'styled-components';
import theme from './theme';

const AuxiliaryDropdown = styled.div`
  padding-top: 28px;
  opacity: 0;
  position: absolute;
  right: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 0, 64, -999);
  transition: opacity 0.3s ease-in 0.3s;
`;

export default AuxiliaryDropdown;
