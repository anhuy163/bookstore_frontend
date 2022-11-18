import { Provider } from "react-redux";
import { store } from "../src/app/redux/store";
import "antd/dist/antd.less";
import NextNProgress from "nextjs-progressbar";
import "../public/styles.css";
import { QueryClientProvider, QueryClient } from "react-query";
import RouteGuard from "../src/containers/RouteGuard";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <NextNProgress /> */}
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
