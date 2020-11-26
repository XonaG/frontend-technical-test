import Contenedor from '../components/Contenedor'
import { connect } from 'react-redux'
import { getUsers } from '../redux/actions/appActions'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import Card from '../components/Card'
// import img1 from '../public/code.jpg'
const Index = () => {
    return (
        <Contenedor>
            <Carousel className="carrusel">
                <Carousel.Item className="imgItemCarousel">
                    <Image className="d-block w-100" src='/code.jpg' alt="Picture of the author" layout="fill" quality={100}/>
                    <Carousel.Caption>
                        <h3>Bienvenido a Git Search</h3>
                        <p>Donde podras consultar datos de Git</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="imgItemCarousel">
                    <Image className="d-block w-100" src='/coding.jpg' alt="Picture of the author" layout="fill" quality={100}/>

                    <Carousel.Caption>
                        <h3>Git Search - Repositorios</h3>
                        <p>Consulta los repositorios existentes en GitHub</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="imgItemCarousel">
                    <Image className="d-block w-100" src='/coding-man.jpg' alt="Picture of the author" layout="fill" quality={100}/>

                    <Carousel.Caption>
                        <h3>Git Search - Usuarios</h3>
                        <p>Consulta los usuarios existentes en GitHub</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="columns">
                <div className="column is-3 is-offset-2">
                    <Card link='/usuarios'
                    titulo="Consulta usuarios"
                    subtitulo="Busca cualquier tipo de repositorios"
                    descripcion="Para poder realizar consultas por favor da click en Ir"
                    icono={faUsers}/>
                </div>
                <div className="column is-3 is-offset-2">
                    <Card link='/repositorios'
                    titulo="Consulta repositorios"
                    subtitulo="Busca cualquier tipo de usuario"
                    descripcion="Para poder realizar consultas por favor da click en Ir"
                    icono={faGithubAlt}/>
                </div>
            </div>
        </Contenedor>

        // <div className="principalContainer">
        //     {/* <h1>Index</h1>
        //     <FontAwesomeIcon icon={faBell} /> */}
        //     <div className="columns is-mobile">
        //         <div className="column logoContainter">
        //             <Logo className="logo" />
        //         </div>
        //     </div>
        // </div>
    )
}

const mapStateToProps = state => ({app: state.data})

const mapDispatchToProps = dispatch => ({
    getUsers: getUsers
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)