export const GET_USERS_BY_DATA = "GET_USERS_BY_DATA";
export const GET_REPOSITORIES_BY_DATA = "GET_REPOSITORIES_BY_DATA";
export const SUCCESS_GET_USERS = "SUCCESS_GET_USERS";
export const SUCCESS_GET_REPOSITORIES = "SUCCESS_GET_REPOSITORIES";

export const getUsers = event => ({
    type: GET_USERS_BY_DATA,
    payload: event.target.value
});

export const getRepositories = event => ({
    type: GET_REPOSITORIES_BY_DATA,
    payload: event.target.value
});

export const successGetUsers = result => ({
    type: SUCCESS_GET_USERS,
    payload: result.items
})

export const successGetRepositories = result => ({
    type: SUCCESS_GET_REPOSITORIES,
    payload: result.items
})