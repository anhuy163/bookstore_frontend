import { Layout, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.less";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  LOGIN_PATH,
  REGISTER_PATH,
  HOME_PATH,
  PROFILE_PATH,
} from "../../constants";

const { Sider } = Layout;

export default function Sidebar() {
  const router = useRouter();
  const keyMapping = {
    home: HOME_PATH,
    profile: PROFILE_PATH,
  };

  return (
    <Sider collapsible className={styles.sider}>
      <div className={styles.logo}>Logo</div>
      <Menu mode='inline' theme='light' defaultSelectedKeys={[router.pathname]}>
        <Menu.Item icon={<HomeOutlined />} key={keyMapping.home}>
          <Link href={"/"} shallow={false}>
            <a className={styles.menuTitle}>Trang chủ</a>
          </Link>
        </Menu.Item>
        <Menu.SubMenu title='Cá nhân' icon={<InfoCircleOutlined />}>
          <Menu.Item key={keyMapping.profile} icon={<UserOutlined />}>
            <Link href={"/me"} shallow={false}>
              <a className={styles.menuTitle}>Thông tin</a>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<ShoppingCartOutlined />}>Giỏ hàng</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
}
