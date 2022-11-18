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
  Button,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Header } = Layout;
import styles from "./styles.module.less";
import "antd/dist/antd.css";
import UserAvatar from "../../UserAvatar";
import {
  AVATAR_SIZE,
  CART_PATH,
  LOGIN_PATH,
  PROFILE_PATH,
  SEARCH_PATH,
} from "../../../constants";
import { useAppSelector, useAppDispatch } from "../../../app/hooks/useRedux";
import useAuth from "../../../app/hooks/useAuth";
import Link from "next/link";
import { deleteUser } from "../../../app/redux/slices/userSlice";
import { useRouter } from "next/router";

export default function HeaderPC() {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  // console.log(user);
  const { logout } = useAuth();
  const cart = useAppSelector((state) => state.cart);

  // const dispatch = useAppDispatch();
  const handleRedirectToLogin = () => {
    window.location.replace(LOGIN_PATH);
  };
  const handleOnLogout = async () => {
    logout();
  };

  const handleOnBookSearch = (e) => {
    router.push(`${SEARCH_PATH}?searchKey=${e}`);
  };

  const profileMenu = () => {
    return (
      <Menu mode='horizontal' theme='light'>
        <Menu.Item key={"6"}>Change password</Menu.Item>
        <Menu.Item key={"7"} onClick={handleOnLogout}>
          Logout
        </Menu.Item>
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
            onSearch={handleOnBookSearch}
          />
        </Col>
        <Col flex={6}>
          {!!user ? (
            <div className={styles.profileArea}>
              <Link href={CART_PATH}>
                <div className={styles.cart}>
                  <Typography className={styles.cartTitle}>Giỏ hàng</Typography>
                  <Badge count={cart.amount} overflowCount={99}>
                    <ShoppingCartOutlined />
                  </Badge>
                </div>
              </Link>
              <div className={styles.avatar}>
                <UserAvatar
                  size={AVATAR_SIZE.small}
                  text={user?.name}
                  link={PROFILE_PATH}
                  src={user?.avatar}
                />
              </div>
              <div className={styles.userNameArea}>
                <Dropdown overlay={profileMenu} trigger={["click"]}>
                  <div className={styles.userName}>
                    {user?.surname} {user?.name}
                  </div>
                </Dropdown>
              </div>
            </div>
          ) : (
            <div className={styles.loginBtnArea}>
              <Button
                onClick={handleRedirectToLogin}
                className={styles.loginBtn}>
                Đăng nhập
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Header>
  );
}
