import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

configure({ adapter: new Adapter() });

describe("Testing User Input Email ID", ()=>{
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  

  test("UserID test case", () => {
    const userId = "#userId";
    const value = "test@mail.com";

    const inputE1 = wrapper.find(userId);
    inputE1.simulate('change', {target: {value: value}})
    expect(wrapper.find(userId).get(0).props.value).toEqual(value);
  })
})
