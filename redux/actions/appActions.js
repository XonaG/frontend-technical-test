import axios from 'axios'

export const GET_USERS_BY_DATA = "GET_USERS_BY_DATA";
export const GET_REPOSITORIES_BY_DATA = "GET_REPOSITORIES_BY_DATA";

export const getUsers = event => ({
    type: GET_USERS_BY_DATA,
    payload: event.target.value
});

export const gerRepositories = event => ({
    type: GET_USERS_BY_DATA,
    payload: event.target.value
});

export const getUsersFromGitHub = event => {
    axios.get('')
    .then(result => {
        console.log(result)
    }).catch(console.log)
}