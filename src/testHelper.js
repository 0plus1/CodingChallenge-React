import React from 'react';
import MemoryRouter from 'react-router/MemoryRouter';
import { mount, render, shallow } from 'enzyme';

const mountWithRouter = node => mount(<MemoryRouter>{node}</MemoryRouter>);
const renderWithRouter = node => render(<MemoryRouter>{node}</MemoryRouter>);
const shallowWithRouter = node => shallow(<MemoryRouter>{node}</MemoryRouter>);

export {
  mountWithRouter,
  renderWithRouter,
  shallowWithRouter,
};
