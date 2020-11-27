import Link from 'next/link'
import Logo from '../public/logo.svg'

// TODA LA FUNCIONALIDAD DEL MENU

const Navegacion = () => {
    return (
        <nav className="level menu">
            <p className="level-item has-text-centered">
                {/* UTILIZAMOS LINK PARA EL RUTEO */}
                <Link href="/">
                    <a className="link is-info">Inicio</a>
                </Link>
            </p>
            <p className="level-item has-text-centered">
                <Link href="/repositorios">
                <a className="link is-info">Repositorios</a>
                </Link>
            </p>
            <p className="level-item has-text-centered">
                <Logo className="logo"/>
            </p>
            <p className="level-item has-text-centered">
                <Link href="/usuarios">
                    <a className="link is-info">Usuarios</a>
                </Link>
            </p>
            <p className="level-item has-text-centered">
                <a className="link is-info">Contact</a>
            </p>
        </nav>
    )
}

export default Navegacion;