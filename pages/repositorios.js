import Contenedor from '../components/Contenedor'
import { connect } from 'react-redux';
import { getRepositories } from '../redux/actions/appActions'

const Repositorios = (props) => {
    const { user, getRepositories } = props;
    return (
        <Contenedor>
            <input type="text" onKeyUp={(event) => getRepositories(event)} />
        </Contenedor>
    )
}

const mapStateToProps = state => ({app: state})

const mapDispatchToProps = {
    getRepositories: getRepositories
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositorios)