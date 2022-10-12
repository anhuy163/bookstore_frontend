import { Card } from "antd";
import styles from "./styles.module.less";

export default function CardWrapper({ children }) {
  return <Card className={styles.cardWrapper}>{children}</Card>;
}
