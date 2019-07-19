import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure(({ adapter: new EnzymeAdapter }));

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props
 * @param {any} state
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state =null) => {
  return shallow(<App {...props} />);
}

/**
 * Returns ShallowWrapper containing node(s) with the given data-test value.
 * @function findByTestAttr
 * @param {*} wrapper - Enzyme shallow wrapper to search within.
 * @param {*} val - value of data-test attr for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

it('renders without error', () => {
  const wrapper = setup();
  const appWrapper = findByTestAttr(wrapper,'component-app');
  expect(appWrapper.length).toBe(1);
});
it('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});
it('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});
it('counter starts with 0', () => {

});
it('clicking button increments counter display', () => {

});