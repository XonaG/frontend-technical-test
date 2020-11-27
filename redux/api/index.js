// IMPORTAMOS AXIOS PARA CONSULTAS HTTP
import axios from 'axios'

export default function apiCallGet(url) {
    return  axios.get(url)
    // OBTENEMOS LA RESPUESTA Y LA REGRESAMOS
    .then(response => response.data.items)
    // EN CASO DE ERROR REGRESAMOS UN ARREGLO VACIO
    .catch(err => [])
}