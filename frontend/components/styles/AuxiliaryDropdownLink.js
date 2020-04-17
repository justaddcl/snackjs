import styled from 'styled-components';
import theme from './theme';

const AuxiliaryDropdownLink = styled.a`
  color: ${theme.colors.blueGrey[700]};
  cursor: pointer;
  font-weight: 400;

  ${props =>
    props.coordinator &&
    `
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 36px 150px;
  `}

  &:hover {
    color: ${theme.colors.blueGrey[500]};
  }
`;

export default AuxiliaryDropdownLink;
