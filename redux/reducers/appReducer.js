import { GET_USERS_BY_DATA, GET_REPOSITORIES_BY_DATA, SUCCESS_GET_USERS, SUCCESS_GET_REPOSITORIES} from '../actions/appActions';

// CREAMOS EL REDUCER DE LA APLICACION Y LE ASIGNAMOS SU ACCION
const appReducer = (state = {usuarios: [], repositorios: [], loading: false}, action) => {
    switch (action.type) {
        case GET_USERS_BY_DATA:

            return {...state, loading: true};
        case GET_REPOSITORIES_BY_DATA:
            return {...state, loading: true};
        case SUCCESS_GET_USERS:
            return {...state, usuarios: action.results, loading: false};
        case SUCCESS_GET_REPOSITORIES:
            return {...state, repositorios: action.results, loading: false};
        default:
            return {...state};
    }
}

export default appReducer;