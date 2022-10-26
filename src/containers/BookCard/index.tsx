import BookCard from "../../components/BookCard";
import styles from "./styles.module.less";

export default function BookCardWrapper() {
  return (
    <div className={styles.bookCardWrapper}>
      <BookCard />
    </div>
  );
}
