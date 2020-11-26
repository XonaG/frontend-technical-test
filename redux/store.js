import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/rooReducer';
import reduxSaga from 'redux-saga'

const store = createStore(rootReducer, applyMiddleware(reduxSaga()));

export default store;