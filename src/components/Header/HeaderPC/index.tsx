import { Menu, Layout, Dropdown, Row, Col, Avatar, Input } from "antd";
const { Header } = Layout;
import styles from "./styles.module.less";
import "antd/dist/antd.css";
import UserAvatar from "../../UserAvatar";
import { AVATAR_SIZE } from "../../../constants";

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
        <Col flex={18} className={styles.searchArea}>
          <Input.Search
            placeholder='Tìm kiếm'
            allowClear
            size='large'
            enterButton
          />
        </Col>
        <Col flex={6}>
          <div className={styles.profileArea}>
            <div>
              <UserAvatar size={AVATAR_SIZE.small} />
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
