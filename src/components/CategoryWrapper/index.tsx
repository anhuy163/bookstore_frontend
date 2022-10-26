import styles from "./styles.module.less";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import BookCardWrapper from "../../containers/BookCard";
// import "antd/dist/antd.css";

export default function Category() {
  return (
    <div className={styles.categoryWrapper}>
      <Carousel
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}>
        <div className={styles.cardWrapper}>
          <BookCardWrapper />
          <BookCardWrapper />
          <BookCardWrapper />
          <BookCardWrapper />
          <BookCardWrapper />
          <BookCardWrapper />
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>123</div>
          <div className={styles.card}>123</div>
          <div className={styles.card}>123</div>
          <div className={styles.card}>123</div>
        </div>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>123</div>
          <div className={styles.card}>123</div>
          <div className={styles.card}>123</div>
          <div className={styles.card}>123</div>
        </div>
      </Carousel>
    </div>
  );
}
