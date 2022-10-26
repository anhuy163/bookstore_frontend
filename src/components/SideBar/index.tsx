import { Layout, Menu } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  InfoCircleOutlined,
  PercentageOutlined,
  MenuOutlined,
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
    <Sider className={styles.sider}>
      <div className={styles.siderDecor}></div>
      <div className={styles.logo}>UETBOOKS</div>
      <Menu mode='inline' theme='light' defaultSelectedKeys={[router.pathname]}>
        <Menu.Item
          icon={<HomeOutlined />}
          key={keyMapping.home}
          onClick={() => router.push("/")}>
          TRANG CHỦ
        </Menu.Item>
        <Menu.Item
          icon={<PercentageOutlined />}
          // key={keyMapping.home}
          // onClick={() => router.push("/")}
        >
          KHUYẾN MÃI
        </Menu.Item>
        <Menu.Item icon={<InfoCircleOutlined />}>GIỚI THIỆU</Menu.Item>

        <Menu.SubMenu title='CÁ NHÂN' icon={<UserOutlined />}>
          <Menu.Item
            key={keyMapping.profile}
            // icon={<InfoCircleOutlined />}
            onClick={() => router.push("/me")}>
            THÔNG TIN
          </Menu.Item>
          <Menu.Item>ĐƠN HÀNG</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu title='THỂ LOẠI' icon={<MenuOutlined />}>
          <Menu.Item>TẤT CẢ</Menu.Item>
          <Menu.Item>GIÁO DỤC</Menu.Item>
          <Menu.Item>ẨM THỤC</Menu.Item>
          <Menu.Item>VĂN PHÒNG</Menu.Item>
          <Menu.Item>DU LỊCH</Menu.Item>
          <Menu.Item>CHÍNH TRỊ</Menu.Item>
          <Menu.Item>GIÁO KHOA</Menu.Item>
          <Menu.Item>TRI THỨC</Menu.Item>
          <Menu.Item>TRUYỆN TRANH</Menu.Item>
          <Menu.Item>NGÔN NGỮ</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
}
