// COMPONENTES
import Contenedor from '../components/Contenedor'
import Buscador from '../components/Buscador'
import RepositoryContent from '../components/RepositoryContent'
// MODULOS
import { connect } from 'react-redux';
import { getRepositories } from '../redux/actions/appActions'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'


// PAGINA REPOSITORIO

const Repositorios = (props) => {
    const { app, getRepositories } = props;
    // SE UTILIZA COMPONENTE REPOSITORIO PARA LOS RESULTADOS DE LA BUSQUEDA Y SE MAPEA
    const repositorios = app.app.repositorios.map((repositorio) => 
        <RepositoryContent 
        icono={faGithubAlt}
        full_name={repositorio.full_name}
        id={repositorio.id}
        language={repositorio.language}
        url={repositorio.html_url}
        privado={repositorio.private} className="column is-12" />
    )

    // SE UTILIZA BUSCADOR PARA CONSULTA DE DATOS

    return (
        <Contenedor>
            <Buscador
            titulo='Consulta de repositorio'
            accion={(event) => getRepositories(event)}
            loading={app.app.loading}
            className="buscador"
            />
            <div className="card-columns">
                {repositorios}
            </div>
            

        </Contenedor>
    )
}

// USAMOS LOS ACTIONS PARA PODER INTERACTUAR CON REDUX Y SUS ACCIONES DE DE REPOSITORIO

const mapStateToProps = state => ({app: state})

const mapDispatchToProps = {
    getRepositories: getRepositories
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositorios)