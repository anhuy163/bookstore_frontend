import { Menu, Layout, Dropdown, Row, Col, Avatar } from "antd";
const { Header } = Layout;
import styles from "./styles.module.less";
import "antd/dist/antd.css";

export default function HeaderPC() {
  const profileMenu = () => {
    return (
      <Menu mode='horizontal' theme='light'>
        <Menu.Item key={"6"}>Change password</Menu.Item>
        <Menu.Item key={"7"}>Logout</Menu.Item>
        <Menu.Item key={"8"}>Forgot password</Menu.Item>
      </Menu>
    );
  };
  return (
    <Header className={styles.header}>
      <Row>
        <Col flex={18}>
          <div className={styles.logo}></div>
          <Menu defaultSelectedKeys={["1"]} mode='horizontal' theme='light'>
            <Menu.Item key={"1"}>Nav 1</Menu.Item>
            <Menu.Item key={"2"}>Nav 2</Menu.Item>
            <Menu.Item key={"3"}>Nav 3</Menu.Item>
            <Menu.SubMenu title='Sub Menu'>
              <Menu.Item key={"4"}>Nav 4</Menu.Item>
              <Menu.Item key={"5"}>Nav 5</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Col>
        <Col flex={6}>
          <div className={styles.profileArea}>
            <div>
              <Avatar />
            </div>
            <div>
              <Dropdown overlay={profileMenu} trigger={["click"]}>
                <div className={styles.userName}>
                  <span>AN HUY</span>
                </div>
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>
    </Header>
  );
}
