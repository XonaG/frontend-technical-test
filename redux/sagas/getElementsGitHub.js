import { put, call, takeLatest } from 'redux-saga/effects'
import { GET_USERS_BY_DATA, GET_REPOSITORIES_BY_DATA, SUCCESS_GET_USERS, SUCCESS_GET_REPOSITORIES} from '../actions/appActions'
import apiCallGet from '../api'

// CREAMOS METODOS PARA QUE AL SER DISPARADOS HAGAN UNA CONSULTA Y EJECUTEN UNA NUEVA ACCION CON LOS RESULTADOS

export function* getUserGitHub({ payload }) {
    try {
        const results = yield call(apiCallGet, `https://api.github.com/search/users?q=${payload}`);
        yield put({type: SUCCESS_GET_USERS, results})
    } catch (error) {
        // ERROR EN LA CONSULTA
    }
}

export function* getRepositoryGitHub({ payload }) {
    try {
        const results = yield call(apiCallGet, `https://api.github.com/search/repositories?q=${payload}`);
        yield put({type: SUCCESS_GET_REPOSITORIES, results})
    } catch (error) {
        // ERROR EN LA CONSULTA
    }
}

// WATCHERS
export function* getGitHubUser() {
    yield takeLatest(GET_USERS_BY_DATA, getUserGitHub);
}
export function* getGitHubRepositories() {
    yield takeLatest(GET_REPOSITORIES_BY_DATA, getRepositoryGitHub);
}