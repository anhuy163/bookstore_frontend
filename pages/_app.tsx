import { Provider } from "react-redux";
import { store } from "../src/app/redux/store";
import "antd/dist/antd.less";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
// m thử style vài cái xem nào
export default MyApp;
