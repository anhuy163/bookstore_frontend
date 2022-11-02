import { Provider } from "react-redux";
import { store } from "../src/app/redux/store";
import "antd/dist/antd.less";
import NextNProgress from "nextjs-progressbar";
import "../public/styles.css";
import { QueryClientProvider, QueryClient } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <NextNProgress /> */}
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
