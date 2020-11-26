import Contenedor from '../components/Contenedor'
import { connect } from 'react-redux'
import { getUsers } from '../redux/actions/appActions'
const Index = () => {
    return (
        <Contenedor>
            <h1>Index</h1>
        </Contenedor>
    )
}

const mapStateToProps = state => ({app: state.data})

const mapDispatchToProps = dispatch => ({
    getUsers: getUsers
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)