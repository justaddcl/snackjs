import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import UserAvatarComponent from '../components/UserAvatar';

const defaultProps = {
  size: '64px',
  src: `https://source.unsplash.com/collection/8470962/64x64`,
};

const testProps = {
  size: 32,
  src: `https://source.unsplash.com/collection/8470962/32x32`,
};

describe('<UserAvatar />', () => {
  it('renders and matches snapshot', () => {
    const wrapper = mount(<UserAvatarComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders without props and img has the correct props', () => {
    const wrapper = mount(<UserAvatarComponent />);
    expect(wrapper.find('img').prop('size')).toBeUndefined();
    expect(wrapper.find('img').prop('src')).toBe(defaultProps.src);
    expect(wrapper.find('img').prop('width')).toBe(defaultProps.size);
    expect(wrapper.find('img').prop('width')).toBe(defaultProps.size);
  });

  it('renders with size prop and matches snapshot', () => {
    const wrapper = mount(<UserAvatarComponent size={testProps.size} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders with props and img has the correct props', () => {
    const wrapper = mount(<UserAvatarComponent size={testProps.size} />);
    expect(wrapper.find('img').prop('size')).toBe(testProps.size);
    expect(wrapper.find('img').prop('src')).toBe(testProps.src);
    expect(wrapper.find('img').prop('width')).toBe(`${testProps.size}px`);
    expect(wrapper.find('img').prop('width')).toBe(`${testProps.size}px`);
  });
});
