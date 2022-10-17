import { Layout, Menu, Breadcrumb } from "antd";
import Head from "next/head";
import "antd/dist/antd.css";
import styles from "./styles.module.less";
import { HomeOutlined } from "@ant-design/icons";
import MyHeader from "../../components/Header";
import Sidebar from "../../components/SideBar";

const { Content, Footer } = Layout;

const LayoutContainer = ({ title, children }) => {
  console.log(children);

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
