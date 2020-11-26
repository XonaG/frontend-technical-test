import { GET_USERS_BY_DATA, GET_REPOSITORIES_BY_DATA } from '../actions/appActions';

const appReducer = (state = {data: {
    name: "guest"
}}, action) => {
    switch (action.type) {
        case GET_USERS_BY_DATA:
            return {...state, data: {
                name: action.payload
            }};
        case GET_REPOSITORIES_BY_DATA:
            return {...state, data: {
                name: action.payload
            }};
        default:
            return {...state};
    }
}

export default appReducer;