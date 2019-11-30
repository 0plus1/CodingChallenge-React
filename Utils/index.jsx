import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Route, Switch } from 'react-router';
import { middlewares } from '../src/createStore';
import rootReducer from '../src/reducers';


export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
  return propsErr;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const withRouter = (component) => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={['/test']}>
      <Switch>
        <Route exact path="/:testRouting?" component={component} />
      </Switch>
    </MemoryRouter>,
  )
    .dive(/* MemoryRouter */)
    .dive(/* Switch */)
    .dive(/* Route */)
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};
