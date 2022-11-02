import styles from "./styles.module.less";
import { Image, Typography, Rate, Button, Card, List, InputNumber } from "antd";
import { CommentOutlined, CopyOutlined } from "@ant-design/icons";
import UserAvatar from "../UserAvatar";
import { AVATAR_SIZE } from "../../constants";
import React, { useState } from "react";

export default function BookDetail({ data = undefined, onAdd }) {
  const [number, setNumber] = useState<number>(1);
  const testBook = {
    id: "1",
    value: 150000,
    author: "Lily Smith",
    title: "Summer Holiday",
    rate: 3.5,
    status: true,
    cover:
      "https://pub-static.fotor.com/assets/projects/pages/dddda0b59fb9433eb53e7174981c8b67/blue-minimal-novel-cover-6e355184dc3545c6bec6a9f618f83e0d.jpg",
    intro:
      "Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.",
    brief:
      "Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. And behavior is hard to teach, even to really smart people.Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.",
  };

  const onNumberChange = (value) => {
    setNumber(value);
  };

  const handleOnAddBook = () => {
    onAdd(testBook, number);
  };

  const dummyData = Array.from({ length: 23 }).map((_, i) => ({
    title: `ant design part ${i}`,
    rate: 1.5,
    content: "Nothing interesting Nothing interesting Nothing interesting",
  }));
  return (
    <div className={styles.detailWrapper}>
      <div className={styles.bookDescription}>
        <div className={styles.bookImageAndInfo}>
          <div className={styles.bookImage}>
            <Image width={"100%"} src={testBook.cover} />
          </div>
          <div className={styles.bookInfo}>
            <Typography className={styles.bookTitle}>Summer Holiday</Typography>
            <Typography className={styles.bookAuthor}>Lily Smith</Typography>
            <Rate value={testBook.rate} allowHalf disabled />
            <Typography className={styles.bookIntroduction}>
              {testBook.intro}
            </Typography>
            <Typography className={styles.bookPrice}>
              {testBook.value} VND
            </Typography>

            <div className={styles.buttonArea}>
              <div className={styles.cmtAndSaveBtns}>
                <Button
                  className={styles.commentButton}
                  icon={<CommentOutlined />}>
                  Đánh giá
                </Button>
                <Button className={styles.saveButton} icon={<CopyOutlined />}>
                  Lưu
                </Button>
              </div>
              <div className={styles.addArea}>
                <InputNumber
                  className={styles.inputNumber}
                  min={1}
                  defaultValue={1}
                  onChange={onNumberChange}
                />
                <Button className={styles.addButton} onClick={handleOnAddBook}>
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bookDetail}>
          <Typography className={styles.bookDetailTitle}>
            Chi tiết về cuốn sách
          </Typography>
          <Typography.Text className={styles.bookBrief}>
            {testBook.brief}
          </Typography.Text>
        </div>
      </div>
      <div className={styles.bookComment}>
        <Typography className={styles.bookCommentTitle}>
          Các đánh giá
        </Typography>
        <div className={styles.commentArea}>
          <List
            split={false}
            itemLayout='vertical'
            size='large'
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={dummyData}
            renderItem={(item) => (
              <List.Item key={item.title}>
                <Card className={styles.commentCard} bordered={false}>
                  <Card.Meta
                    avatar={<UserAvatar size={AVATAR_SIZE.small} />}
                    title={item.title}
                    description={
                      <div>
                        <Rate value={item.rate} disabled />
                        <Typography>{item.content}</Typography>
                      </div>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}
