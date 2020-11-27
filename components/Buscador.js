
const Buscador = (props) => {
    const { titulo, accion } = props;
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