import { all } from 'redux-saga/effects'
import { getGitHubUser, getGitHubRepositories} from './getElementsGitHub'

// HACEMOS UNA FUNCION CREADORA PARA EJECUTAR FUNCIONES ASINCRONAS Y USAMOS EL METODO ALL DE REDUC SAGA PARA ASIGNAR FUNCIONES ESPECIFICAS DE CONSULTA

export default function* rootSaga() {
    yield all([
        getGitHubUser(),
        getGitHubRepositories()
    ]);
}