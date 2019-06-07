import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure(({ adapter: new EnzymeAdapter }));

it('renders without error', () => {
  const wrapper = shallow(<App />);
  const appWrapper = wrapper.find('[data-test="component-app"]');
  expect(appWrapper.length).toBe(1);
});
it('renders increment button', () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find('[data-test="increment-button"]');
  expect(button.length).toBe(1);
});
it('renders counter display', () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find('[data-test="counter-display"]');
  expect(counterDisplay.length).toBe(1);
});
it('counter starts with 0', () => {

});
it('clicking button increments counter display', () => {

});