import App from 'next/app';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from '../redux/store'
class MyApp extends App {
  static async getInitialProps({Component, ctx}) {

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
      <Provider store={store}>
          <Component {...appProps} />
      </Provider>
    );
  }
}
const makestore = () => store;

export default withRedux(makestore)(MyApp);