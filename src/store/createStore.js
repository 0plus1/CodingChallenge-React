import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';
import thunk from 'redux-thunk';

export default (dependencies = {}, preloadedState = {}) => {
    return createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk.withExtraArgument(dependencies)))
    );
};
