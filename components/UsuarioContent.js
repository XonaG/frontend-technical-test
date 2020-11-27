// COMPONENTE CAJA DE RESULTADO DE BUSQUEDA
const UsuarioContent = (props) => {
    // TIENE COMO ATRIBUTOS AVATAR, ID DE USUARIO, 
    return (
        <div className="card cardRepository">
            <img src={props.avatar} className="card-img-top" alt="usuario" />
            <div className="card-body">
                <p className="card-text">ID de usuario: {props.id}</p>
            </div>
            <a href={props.url} className="btn btn-primary btn-sm botonCard">Ir</a>
        </div>
    )
}

export default UsuarioContent;