import Head from 'next/head'
import Navegacion from './Navegacion'

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