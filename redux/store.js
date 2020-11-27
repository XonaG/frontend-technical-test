// IMPORTAMOS REDUXSAGA PARA QUE NUESTRAS ACCIONES PASEN POR UN MIDDLEWARE ANTES
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/rooReducer';
import reduxSaga from 'redux-saga'

import rootSaga from './sagas'

// CREAMOS EL MIDDLEWARE

const sagaMiddleware = reduxSaga();

// Y SE LO ASIGNAMOS AL STORE

const store = {...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
runSaga: sagaMiddleware.run(rootSaga)}

export default store;