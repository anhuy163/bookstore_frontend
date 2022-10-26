import { Typography } from "antd";
import styles from "./styles.module.less";

export default function BookCard() {
  return (
    <div className={styles.bookCard}>
      <img
        className={styles.bookCover}
        src='https://images.template.net/736/Free-Vintage-Book-Cover-Template-2x.jpg'
      />
      <Typography className={styles.bookTitle}>
        The Frailty of a Woman
      </Typography>
      <Typography className={styles.bookAuthor}>Pierre Markus</Typography>
      <Typography className={styles.bookPrice}>100.000đ</Typography>
    </div>
  );
}
