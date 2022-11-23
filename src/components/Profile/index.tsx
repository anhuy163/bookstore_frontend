import { Tabs } from "antd";
import React from "react";
import CardWrapper from "../CardWrapper";
import {
  InfoOutlined,
  HighlightOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.less";
import UserInfoContainer from "../../containers/UserInfo";

export default function Profile() {
  const tabItems = [
    {
      label: (
        <span>
          <InfoOutlined />
          Hồ sơ
        </span>
      ),
      key: "1",
      children: <UserInfoContainer />,
    },
    // {
    //   label: (
    //     <span>
    //       <HighlightOutlined />
    //       Đánh giá
    //     </span>
    //   ),
    //   key: "2",
    //   children: <>Đánh giá của người dùng</>,
    // },
    // {
    //   label: (
    //     <span>
    //       <CopyOutlined />
    //       Đã lưu
    //     </span>
    //   ),
    //   key: "3",
    //   children: <>Nội dung đã lưu</>,
    // },
  ];
  return (
    <CardWrapper>
      <Tabs
        className={styles.tab}
        type='card'
        size='middle'
        defaultActiveKey='1'
        items={tabItems}
      />
    </CardWrapper>
  );
}
