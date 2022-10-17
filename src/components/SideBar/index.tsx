import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.less";

const { Sider } = Layout;

export default function Sidebar() {
  return (
    <Sider collapsible className={styles.sider}>
      <div className={styles.logo}>Logo</div>
      <Menu mode='inline' theme='light' defaultSelectedKeys={["1"]}>
        <Menu.Item icon={<UserOutlined />} key={"1"}>
          Nav 1
        </Menu.Item>
        <Menu.Item icon={<UserOutlined />} key={"2"}>
          Nav 2
        </Menu.Item>
        <Menu.Item icon={<UserOutlined />} key={"3"}>
          Nav 3
        </Menu.Item>
        <Menu.SubMenu icon={<UserOutlined />} title='Sub Menu'>
          <Menu.Item icon={<UserOutlined />} key={"4"}>
            Nav 4
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />} key={"5"}>
            Nav 5
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
}
