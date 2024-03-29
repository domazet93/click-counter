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
const setup = ({ props = {}, state = null } = {}) => {
  const wrapper = shallow(<App {...props} />);
  if(state) {
    wrapper.setState(state)
  }
  return wrapper;
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
it('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});
it('should not render alert message', () => {
  const wrapper = setup();
  const alertMsg = findByTestAttr(wrapper, 'alert-msg');
  expect(alertMsg.length).toBe(0);
});
it('counter starts with 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

describe('Increment', () => {
  it('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });
  it('clicking button increments counter display', () => {
    const counter = 7;
    const wrapper = setup({ state: { counter } });

    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    wrapper.update();

    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1);
  });
})
describe('Decrement', () => {
  it('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });
  it('clicking the decrement decrements button counter display', () => {
    const counter = 6;
    const wrapper = setup({ state: { counter }});

    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
    wrapper.update();

    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter - 1)
  })
  it('clicking the decrement button on counter zero shows alert message', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');
    wrapper.update();

    const alertMsg = findByTestAttr(wrapper, 'alert-msg');
    expect(alertMsg.length).toBe(1);
  });
})