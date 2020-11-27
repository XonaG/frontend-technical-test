import Contenedor from '../components/Contenedor'
import Buscador from '../components/Buscador'
import UsuarioContent from '../components/UsuarioContent'
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions/appActions'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Usuarios = (props) => {
    const { app, getUsers } = props;
    const usuarios = app.app.usuarios.map((usuario) => 
        <UsuarioContent 
        icono={faUser}
        full_name={usuario.full_name}
        id={usuario.id}
        language={usuario.language}
        url={usuario.html_url}
        avatar={usuario.avatar_url}
        privado={usuario.private} className="column is-12" />
    )
    return (
        <Contenedor>
            <Buscador
            titulo='Consulta de usuarios'
            accion={(event) => getUsers(event)}
            loading={app.app.loading}
            className="buscador"
            />
            <div className="card-columns">
                {usuarios}
            </div>
        </Contenedor>
    )
}

const mapStateToProps = state => ({app: state})

const mapDispatchToProps = {
    getUsers: getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)