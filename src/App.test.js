import React from 'react';
import SetUpTests from './setupTests'
import App from './App';
import { shallow } from 'enzyme';


describe("List Test Case", () => {
  it("renders content component", () => {
    shallow(<App />);
  });
})