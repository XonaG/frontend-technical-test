import App from 'next/app';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from '../redux/store'
import '../assets/index.scss'
import '../assets/nav.scss'
import '../assets/card.scss'
import '../assets/repositorio.scss'
import '../assets/buscador.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.css'

// COMPONENTE RAIZ ENCARGADO DE DARLE FUNCIONALIDAD A TODO EL ENTORNO DE NEXTJS
class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    // SE OBTIENEN LAS PROPIEDADES DEL STORE
    return {
      appProps: {
        ...(Component.getInitialProps ? await 
          Component.getInitialProps(ctx) : {})
      }
    }
  }
  render() {
    const { Component, appProps } = this.props;
    return (
      // SE ENVUELVE TODA LA APLICACION EN UN PROVIDER
      <Provider store={store}>
          <Component {...appProps} />
      </Provider>
    );
  }
}
const makestore = () => store;

export default withRedux(makestore)(MyApp);