import axios from 'axios'

export default function apiCallGet(url) {
    return  axios.get(url)
    .then(response => response.data.items)
}