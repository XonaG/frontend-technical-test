import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Card = (props) => {
    console.log(props)
    return (
        <div className="card cardContainer">
            <FontAwesomeIcon className="iconCard" icon={props.icono} />
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.titulo}</p>
                        <p className="subtitle is-6">{props.subtitulo}</p>
                    </div>
                </div>
                <div className="content">
                    {props.descripcion}
                </div>
            </div>
            <Link href={props.link}>
                <button className="button is-fullwidth is-link botonCard">Ir</button>
            </Link>
        </div>
    )
}

export default Card;