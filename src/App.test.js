import { render, screen } from '@testing-library/react';
import React from "react";
import App from './App.js';
import { shallow, mount } from 'enzyme';

describe("Counter testing", ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = mount(<App />);
    console.log(wrapper.debug());
  })
  test('Counter testing', () => {
    expect(wrapper.find('h1').text()).toContain('This is counter app')
  });
  test('Render button with text of increment',()=>{
    expect(wrapper.find('#increment-btn').text()).toBe("Increment")
  })

  test('Render the initial value of state in a div', ()=>{
    expect(wrapper.find('#counter-value').text()).toBe('0')
  })

  test('render the click event of increment button and increment counter value', ()=> {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  })

  test("render the click event of decrement button and decrement the counter value", ()=>{
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find("#decrement-btn").simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  })

  test("if the counter is at zero, decrementing should not produce a zero value", ()=> {
    wrapper.find("#decrement-btn").simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  })
})

