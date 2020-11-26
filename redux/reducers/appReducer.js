import { GET_USERS_BY_DATA, GET_REPOSITORIES_BY_DATA, SUCCESS_GET_USERS, SUCCESS_GET_REPOSITORIES} from '../actions/appActions';

const appReducer = (state = {usuarios: [], repositorios: []}, action) => {
    switch (action.type) {
        case GET_USERS_BY_DATA:
            return {...state};
        case GET_REPOSITORIES_BY_DATA:
            return {...state};
        case SUCCESS_GET_USERS:
            return {...state, usuarios: action.results};
        case SUCCESS_GET_REPOSITORIES:
            return {...state, repositorios: action.results};
        default:
            return {...state};
    }
}

export default appReducer;