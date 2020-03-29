import styled from 'styled-components';
import theme from './styles/theme';

const StyledUserAvatar = styled.img`
  border-radius: 100%;
  box-shadow: inset 2px 4px 0 ${theme.colors.blueGrey[100]};
  height: ${props => `${props.size}px` || '64px'};
  width: ${props => `${props.size}px` || '64px'};
`;

const UserAvatar = ({ size }) => (
  <StyledUserAvatar
    src={`https://source.unsplash.com/collection/8470962/${size || '64'}x${size || '64'}`}
    alt="User avatar"
    width={size ? `${size}px` : '64px'}
    height={size ? `${size}px` : '64px'}
    size={size}
  />
);

export default UserAvatar;
