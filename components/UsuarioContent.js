const UsuarioContent = (props) => {
    return (
        <div className="card cardRepository">
            <img src={props.avatar} className="card-img-top" alt="usuario" />
            <div className="card-body">
                <h5 className="card-title">{props.full_name}</h5>
                <p className="card-text">ID de usuario: {props.id}</p>
                <p className="card-text"><small className="text-muted">Lenguaje de programación: <b>{props.language ? props.language: 'No especificado'}</b> </small></p>
            </div>
            <a href={props.url} className="btn btn-primary btn-sm botonCard">Ir</a>
        </div>
    )
}

export default UsuarioContent;