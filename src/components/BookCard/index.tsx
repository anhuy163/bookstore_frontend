import { Typography, Image } from "antd";
import styles from "./styles.module.less";
import Link from "next/link";
import { formatMoney } from "../../app/helpers/moneyhelper";

export default function BookCard({ book }) {
  return (
    <div className={styles.bookCard}>
      <img className={styles.bookCover} src={book.cover} />
      <Link href={"/book/1"}>
        <Typography className={styles.bookTitle}>{book.title}</Typography>
      </Link>
      {/* <Typography className={styles.bookAuthor}>{book.author}</Typography> */}
      <Typography className={styles.bookPrice}>
        {formatMoney(book.value)}
      </Typography>
    </div>
  );
}
