import styled from 'styled-components';
import theme from './theme';

const AuxiliaryDropdownContainer = styled.div`
  background-color: ${theme.colors.blueGrey[50]};
  box-shadow: inset 0 1px 0 hsla(224, 84%, 75%, 1), 0 4px 6px hsla(0, 0%, 0%, 0.1);
  ${props =>
    props.withPadding &&
    `
    padding-top: 24px;
    padding-bottom: 24px;
  `}
`;

export default AuxiliaryDropdownContainer;
