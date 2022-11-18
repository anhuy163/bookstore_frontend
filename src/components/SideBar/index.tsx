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
  BOOK_PATH,
} from "../../constants";
import { useAppSelector } from "../../app/hooks/useRedux";
import useQueryGetBookCategories from "../../app/hooks/useQueryGetBookCategories";
import { useState, useEffect } from "react";

const { Sider } = Layout;

export default function Sidebar() {
  const { data, loading, error } = useQueryGetBookCategories();
  // console.log(data);

  const [defaultOpenKeys, setDefaultOpenKeys] = useState(["personal", "genre"]);

  // console.log(defaultOpenKeys);

  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  const keyMapping = {
    home: HOME_PATH,
    profile: PROFILE_PATH,
  };
  // useEffect(() => {
  //   const categoryId = Number(router.query.categoryId);
  //   if (categoryId >= 552 && categoryId <= 554) {
  //     setDefaultOpenKeys((prevState) => [...prevState, "544"]);
  //   } else if (categoryId >= 555 && categoryId <= 557) {
  //     setDefaultOpenKeys((prevState) => [...prevState, "545"]);
  //   } else if (categoryId >= 558 && categoryId <= 560) {
  //     setDefaultOpenKeys((prevState) => [...prevState, "546"]);
  //   } else if (categoryId >= 561 && categoryId <= 562) {
  //     setDefaultOpenKeys((prevState) => [...prevState, "547"]);
  //   } else if (categoryId >= 564 && categoryId <= 565) {
  //     setDefaultOpenKeys((prevState) => [...prevState, "548"]);
  //   } else if (categoryId >= 566 && categoryId <= 567) {
  //     setDefaultOpenKeys((prevState) => [...prevState, "549"]);
  //   } else if (categoryId >= 568 && categoryId <= 570) {
  //     setDefaultOpenKeys((prevState) => [...prevState, "550"]);
  //   }
  // }, [router.query.categoryId]);

  const handleOnRedirectToProfile = () => {
    if (user) {
      router.push(PROFILE_PATH);
    } else {
      window.location.replace(LOGIN_PATH);
    }
  };

  const handleOnChoosingBookCategory = (id) => {
    router.push(`${BOOK_PATH}?categoryId=${id}`);
    // setOpenKeys([...openKeys, id]);
  };

  return (
    <Sider className={styles.sider}>
      <div className={styles.siderDecor}></div>
      <div className={styles.logo}>UETBOOKS</div>
      <Menu
        defaultOpenKeys={defaultOpenKeys}
        mode='inline'
        theme='light'
        defaultSelectedKeys={[router.pathname]}>
        <Menu.Item
          icon={<HomeOutlined />}
          key={keyMapping.home}
          onClick={() => router.push("/")}>
          TRANG CHỦ
        </Menu.Item>
        <Menu.SubMenu key={"personal"} title='CÁ NHÂN' icon={<UserOutlined />}>
          <Menu.Item
            key={keyMapping.profile}
            // icon={<InfoCircleOutlined />}
            onClick={handleOnRedirectToProfile}>
            THÔNG TIN
          </Menu.Item>
          <Menu.Item>ĐƠN HÀNG</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key={"genre"} title='THỂ LOẠI' icon={<MenuOutlined />}>
          {data?.map((item) => (
            <Menu.SubMenu key={item?.id} title={item?.name.toUpperCase()}>
              {item?.subCategories.map((category) => (
                <Menu.Item
                  className={
                    router.asPath === `${BOOK_PATH}?categoryId=${category?.id}`
                      ? "ant-menu-item-selected"
                      : ""
                  }
                  onClick={() => handleOnChoosingBookCategory(category?.id)}
                  key={`${BOOK_PATH}?categoryId=${category?.id}`}>
                  {category?.name}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
}
