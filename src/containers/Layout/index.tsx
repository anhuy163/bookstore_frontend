import { Layout, Menu, Breadcrumb } from "antd";
import Head from "next/head";
import "antd/dist/antd.css";
import styles from "./styles.module.less";
import { HomeOutlined } from "@ant-design/icons";
import MyHeader from "../../components/Header";
import Sidebar from "../../components/SideBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingScreen from "../../components/LoadingScreen";

const { Content, Footer } = Layout;

const LayoutContainer = ({ title, children }) => {
  const router = useRouter();
  const [directing, setDirecting] = useState(true);
  const onDirecting = () => {
    setDirecting(false);
  };
  useEffect(() => {
    const directTingTimeout = setTimeout(onDirecting, 500);
    () => directTingTimeout;
    const handleStart = (url) => url !== router.asPath && setDirecting(true);
    router.events.on("routeChangeStart", handleStart);
    return () => clearTimeout(directTingTimeout);
  }, []);
  return !!directing ? (
    <LoadingScreen />
  ) : (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Sidebar />
        <Layout className={styles.layout}>
          <MyHeader />
          <div className={styles.content}>{children}</div>
          <Footer className={styles.footer}>
            Ant Design ©2022 Created by An Huy
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutContainer;
