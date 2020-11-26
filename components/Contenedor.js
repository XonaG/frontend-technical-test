import Navegacion from './Navegacion'

const Contenedor = (props) => (
    <div>
        <Navegacion/>
        <div>
            {props.children}
        </div>
    </div>
)

export default Contenedor;