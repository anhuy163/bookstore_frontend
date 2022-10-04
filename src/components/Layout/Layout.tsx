import { Layout } from "antd";
import Head from "next/head";

const LayoutContainer = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </div>
  );
};

export default LayoutContainer;
