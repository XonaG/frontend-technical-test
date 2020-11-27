import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// COMPONENTE DE RESULTADO DE REPOSITORIO
const RepositoryContent = (props) => {
    // RECIBE COMO DATOS DE ENTRADA UN ICONO, NOMBRE, ID, LEGUAJE
    const repositorioPrivado = () => (
        props.privado ? <div>
            <FontAwesomeIcon className="iconCard" icon={faLock} />
        </div> : ''
    )
    return (
        <div className="card cardRepository">
            {/* CANDADO QUE SE IMPRIME SI EL REPOSITORIO ES PRIVADO */}
            {repositorioPrivado()}
            <FontAwesomeIcon className="iconCard" icon={props.icono} />
            <div className="card-body">
                <h5 className="card-title">{props.full_name}</h5>
                <p className="card-text">{props.id}</p>
                <p className="card-text"><small className="text-muted">Lenguaje de programación: <b>{props.language ? props.language: 'No especificado'}</b> </small></p>
            </div>
            <a href={props.url} className="btn btn-primary btn-sm botonCard">Ir</a>
        </div>
    )
}

export default RepositoryContent;