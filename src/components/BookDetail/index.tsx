import styles from "./styles.module.less";
import {
  Image,
  Typography,
  Rate,
  Button,
  Card,
  List,
  InputNumber,
  Form,
} from "antd";
import { CommentOutlined, CopyOutlined } from "@ant-design/icons";
import UserAvatar from "../UserAvatar";
import { AVATAR_SIZE, HOME_PATH } from "../../constants";
import React, { useState } from "react";
import { formatMoney } from "../../app/helpers/moneyhelper";
import { useAppSelector } from "../../app/hooks/useRedux";
import { useRouter } from "next/router";
import { LOGIN_PATH } from "../../constants";
import PopupPostCommentContainer from "../../containers/PopupPostComment";
import FormWrapper from "../FormWrapper";
import useQueryGetCart from "../../app/hooks/useQueryGetCart";

export type Comment = {
  username?: string;
  userAva?: string;
  title?: string;
  star?: number;
  content?: string;
};

export default function BookDetail({
  defaultValues = undefined,
  onAdd,
  comments,
  onPostComment,
  loading,
  cart,
}) {
  const user = useAppSelector((state) => state.user);
  // const cart = useAppSelector((state) => state.cart);
  // console.log(comments);
  // console.log(cart);
  // console.log(process.env.NEXT_PUBLIC_PUBLIC_PASSWORD);

  const router = useRouter();
  const [number, setNumber] = useState<number>(1);
  const [togglePopupPostCmt, setTogglePopupPostCmt] = useState(false);

  const onOpenPopupPostCmt = () => {
    if (!!user) {
      setTogglePopupPostCmt(true);
      return;
    }
    const pathName = router.query;
    router.push(`${LOGIN_PATH}?bookId=${pathName.id}`);
  };
  const onCancelPopupPostCmt = () => {
    setTogglePopupPostCmt(false);
  };

  const onNumberChange = (value) => {
    setNumber(value);
  };

  const handleOnAddBook = () => {
    if (!!user) {
      onAdd({
        bookId: parseInt(router.query.id.toString()),
        bookAva: defaultValues.avatar,
        bookName: defaultValues.name,
        discount: 0,
        priceNow: defaultValues.price,
        priceOld: 0,
        quantity: number,
        status: false,
      });
    } else {
      const pathName = router.query;
      router.push(`${LOGIN_PATH}?bookId=${pathName.id}`);
    }
  };

  const dummyData = Array.from({ length: 23 }).map((_, i) => ({
    title: `ant design part ${i}`,
    rate: 1.5,
    content: "Nothing interesting Nothing interesting Nothing interesting",
  }));
  return (
    // <FormWrapper loading={loading}>
    <div className={styles.detailWrapper}>
      <div className={styles.bookDescription}>
        <div className={styles.bookImageAndInfo}>
          <div className={styles.bookImage}>
            <Image width={"100%"} src={defaultValues?.avatar} />
          </div>
          <div className={styles.bookInfo}>
            <Typography className={styles.bookTitle}>
              {defaultValues?.name}
            </Typography>
            <Typography className={styles.bookAuthor}>
              {defaultValues?.author?.name}
            </Typography>
            <Rate value={defaultValues?.starAvg} allowHalf disabled />
            <Typography className={styles.bookIntroduction}>
              {defaultValues?.mainDe}
            </Typography>

            <Typography className={styles.bookPrice}>
              {formatMoney(defaultValues?.price)}
            </Typography>

            <div className={styles.buttonArea}>
              <div className={styles.cmtAndSaveBtns}>
                <Button
                  onClick={onOpenPopupPostCmt}
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
            {defaultValues?.desc}
          </Typography.Text>
        </div>
      </div>

      <div className={styles.bookComment}>
        <Typography className={styles.bookCommentTitle}>
          Các đánh giá
        </Typography>

        <div className={styles.commentArea}>
          <List
            locale={{ emptyText: "Không có bình luận nào" }}
            split={false}
            // itemLayout='vertical'
            size='large'
            pagination={{
              pageSize: 5,
            }}
            dataSource={comments as Array<Comment>}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <Card className={styles.commentCard} bordered={false}>
                  <Card.Meta
                    avatar={
                      <UserAvatar size={AVATAR_SIZE.small} src={item.userAva} />
                    }
                    title={
                      <Typography
                        style={{ fontWeight: "500", fontSize: "20px" }}>
                        {item.username}
                      </Typography>
                    }
                    description={
                      <div>
                        <Rate value={item.star} disabled />
                        <Typography
                          style={{ fontWeight: "500", fontSize: "18px" }}>
                          {item.title}
                        </Typography>
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

      <PopupPostCommentContainer
        visible={togglePopupPostCmt}
        onCancel={onCancelPopupPostCmt}
        onFinish={onPostComment}
        loading={loading}
      />
    </div>
    // </FormWrapper>
  );
}
