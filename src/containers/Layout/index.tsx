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
import { useAppDispatch } from "../../app/hooks/useRedux";
import { deleteUser, setUser } from "../../app/redux/slices/userSlice";
const { Content, Footer } = Layout;

const LayoutContainer = ({ title, children }) => {
  // const dispatch = useAppDispatch();
  // const router = useRouter();
  // const [directing, setDirecting] = useState(true);

  // const onDirecting = () => {
  //   setDirecting(false);
  // };
  // useEffect(() => {
  //   if (localStorage.getItem("currentUser")) {
  //     dispatch(setUser(JSON.parse(localStorage.getItem("currentUser"))));
  //   } else {
  //     dispatch(deleteUser());
  //   }
  //   const directTingTimeout = setTimeout(onDirecting, 500);
  //   () => directTingTimeout;
  //   const handleStart = (url) => url !== router.asPath && setDirecting(true);
  //   router.events.on("routeChangeStart", handleStart);
  //   return () => clearTimeout(directTingTimeout);
  // }, [router.pathname, router.query]);
  return (
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
