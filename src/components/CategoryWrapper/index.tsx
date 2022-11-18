import styles from "./styles.module.less";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import BookCardWrapper from "../../containers/BookCard";
import { Book } from "../../app/redux/slices/cartSlice";
import { SKILL_BOOKS } from "../../constants";

export default function Category({ data }) {
  const firstData = data
    ?.slice(0, 5)
    .map((book) => <BookCardWrapper key={book.id} data={book} />);
  const secondData = data
    ?.slice(5, 10)
    .map((book) => <BookCardWrapper key={book.id} data={book} />);

  return (
    <div className={styles.categoryWrapper}>
      <Carousel
        autoplay
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}>
        <div className={styles.cardWrapper}>{firstData}</div>
        <div className={styles.cardWrapper}>{secondData}</div>
      </Carousel>
    </div>
  );
}
