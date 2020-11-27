// COMPONENTE BUSCADOR DE RESULTADOS DE BUSQUEDA
const Buscador = (props) => {
    // RECIBE UN TITULO ACCION Y LOADING
    const { titulo, accion } = props;
    // FUNCION QUE ACTIVA EL LOADING
    const loading = props.loading ? <div className="spinner-grow text-primary" style={{width: '5rem', height: '5rem'}} role="status">
        <span className="sr-only">Loading...</span>
    </div> : '';

    return (
        <div className="buscador">
            <div className="columns">
                <div className="column is-5 is-offset-3 tituloConsulta">
                    <h3>{titulo}</h3>
                </div>
            </div>
            <div className="columns">
                <div className="column control is-large is-5 is-offset-3">
                    {/* AL DETECTAR QUE LA TECLA SUBE SE ACTIVA LA FUNCION QUE ENTRO EN EL ACTION Y LE ASIGNAMOS EL EVENTO */}
                    <input onKeyUp={(event) => accion(event)} className="input is-large" type="text" placeholder="Mi repositorio"></input>
                </div>
            </div>
            <div className="columns spiner">   
                {loading}
            </div>
        </div>
    )
}

export default Buscador;