import Category from "../../components/CategoryWrapper";
import styles from "./styles.module.less";

export default function CategoryContainer() {
  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.categoryTop}>
        <div className={styles.categoryTitle}>SÁCH NỔI BẬT</div>
        <div className={styles.showAllButton}>XEM TẤT CẢ</div>
      </div>

      <Category />
    </div>
  );
}
