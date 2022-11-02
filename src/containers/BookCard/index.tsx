import BookCard from "../../components/BookCard";
import styles from "./styles.module.less";

export default function BookCardWrapper({ data }) {
  return (
    <div className={styles.bookCardWrapper}>
      <BookCard book={data} />
    </div>
  );
}
