import Contenedor from '../components/Contenedor'
import Buscador from '../components/Buscador'
import { connect } from 'react-redux';
import { getRepositories } from '../redux/actions/appActions'
import RepositoryContent from '../components/RepositoryContent'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const Repositorios = (props) => {
    const { app, getRepositories } = props;
    const repositorios = app.app.repositorios.map((repositorio) => 
        <RepositoryContent 
        icono={faGithubAlt}
        full_name={repositorio.full_name}
        id={repositorio.id}
        language={repositorio.language}
        url={repositorio.html_url}
        privado={repositorio.private} className="column is-12" />
    )

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

const mapStateToProps = state => ({app: state})

const mapDispatchToProps = {
    getRepositories: getRepositories
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositorios)