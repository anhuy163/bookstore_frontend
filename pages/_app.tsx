import { Provider } from "react-redux";
import { store } from "../src/app/redux/store";
import "antd/dist/antd.less";
import NextNProgress from "nextjs-progressbar";
import "../public/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <NextNProgress /> */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
