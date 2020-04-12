import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import AuxiliaryDropdownItemIconComponent from '../components/AuxiliaryDropdownItemIcon';

const testIcon = 'chevron-down';

describe('<AuxiliaryDropdownItemIcon />', () => {
  it('renders and matches snapshot', () => {
    const wrapper = mount(<AuxiliaryDropdownItemIconComponent icon={testIcon} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders and the icon is correct', () => {
    const wrapper = mount(<AuxiliaryDropdownItemIconComponent icon={testIcon} />);
    expect(wrapper.find('i').prop('className')).toContain(testIcon);
  });
});
