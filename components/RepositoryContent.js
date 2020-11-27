import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const RepositoryContent = (props) => {
    const repositorioPrivado = () => (
        props.privado ? <div>
            <FontAwesomeIcon className="iconCard" icon={faLock} />
        </div> : ''
    )
    return (
        <div className="card cardRepository">
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