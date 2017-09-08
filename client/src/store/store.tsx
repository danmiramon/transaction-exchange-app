import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const appStore: Store<{}> = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default appStore;