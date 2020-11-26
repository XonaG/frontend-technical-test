import Link from 'next/link'


const Navegacion = () => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Index</a>
                </Link>
            </li>
            <li>
                <Link href="/repositorios">
                    <a>Repositorios</a>
                </Link>
            </li>
            <li>
                <Link href="/usuarios">
                    <a>Usuarios</a>
                </Link>
            </li>
        </ul>
    )
}

export default Navegacion;