import SideMenu from "../../SideMenu";
import { Avatar, Button, Layout } from "antd";
import React, { useState } from "react";
const { Header } = Layout;
import styles from "./styles.module.less";
import { MenuOutlined } from "@ant-design/icons";

export default function HeaderMB() {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const onOpen = () => {
    setOpenSideMenu(true);
  };
  const onClose = () => {
    setOpenSideMenu(false);
  };
  return (
    <Header className={styles.header}>
      <Button
        type='text'
        onClick={onOpen}
        className={styles.button}
        icon={<MenuOutlined />}></Button>
      <SideMenu open={openSideMenu} onClose={onClose} />
      <div className={styles.logo}>Yuu Book</div>
      <Avatar />
    </Header>
  );
}
