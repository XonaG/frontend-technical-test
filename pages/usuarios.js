import Contenedor from '../components/Contenedor'
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions/appActions'
import { useState } from 'react';

const Usuarios = (props) => {
    const { user, getUsers } = props;
    return (
        <Contenedor>
            <input type="text" onKeyUp={(event) => getUsers(event)} />
        </Contenedor>
    )
}

const mapStateToProps = state => ({app: state})

const mapDispatchToProps = {
    getUsers: getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)