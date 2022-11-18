import { Typography, Image, Rate, Tooltip } from "antd";
import styles from "./styles.module.less";
import Link from "next/link";
import { formatMoney } from "../../app/helpers/moneyhelper";

export default function BookCard({ book }) {
  // console.log(book);

  return (
    <div className={styles.bookCard}>
      <div className={styles.bookCover}>
        <Image
          style={{ objectFit: "contain", width: "160px", height: "160px" }}
          src={book.avatar}
        />
      </div>

      <Link href={`/book/${book.id}`}>
        <Tooltip title={book?.name}>
          <Typography className={styles.bookTitle}>{book.name}</Typography>
        </Tooltip>
      </Link>

      {/* <Typography className={styles.bookAuthor}>{book.author}</Typography> */}
      <Typography className={styles.bookPrice}>
        {formatMoney(book.price)}
      </Typography>
      <div className={styles.bookRate}>
        <Rate disabled defaultValue={book?.starAvg} />
      </div>
    </div>
  );
}
