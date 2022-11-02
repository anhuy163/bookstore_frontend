import {
  Menu,
  Layout,
  Dropdown,
  Row,
  Col,
  Avatar,
  Input,
  Badge,
  Typography,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Header } = Layout;
import styles from "./styles.module.less";
import "antd/dist/antd.css";
import UserAvatar from "../../UserAvatar";
import { AVATAR_SIZE, CART_PATH } from "../../../constants";
import { useAppSelector, useAppDispatch } from "../../../app/hooks/useRedux";

import Link from "next/link";

export default function HeaderPC() {
  const cart = useAppSelector((state) => state.cart);
  // console.log(cart);

  const dispatch = useAppDispatch();

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
            <Link href={CART_PATH}>
              <div className={styles.cart}>
                <Typography className={styles.cartTitle}>Giỏ hàng</Typography>
                <Badge count={cart.amount} overflowCount={99}>
                  <ShoppingCartOutlined />
                </Badge>
              </div>
            </Link>
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
