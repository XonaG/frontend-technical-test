import Head from 'next/head'
// COMPONENTE NAV
import Navegacion from './Navegacion'
// CONTENEDOR QUE EN SU CONTENIDO TIENE EL HEADER LA NAVEGACION Y SUS COMPONENTES HIJOS
const Contenedor = (props) => {
    return (
        <div>
            <Head>
                <title>GitSearch</title>
            </Head>
            <Navegacion/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default (Contenedor);