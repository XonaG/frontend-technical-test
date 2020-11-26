import { all } from 'redux-saga/effects'
import { getGitHubUser, getGitHubRepositories} from './getElementsGitHub'

export default function* rootSaga() {
    yield all([
        getGitHubUser(),
        getGitHubRepositories()
    ]);
}