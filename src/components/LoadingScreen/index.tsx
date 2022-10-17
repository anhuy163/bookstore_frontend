import { Spin } from "antd";
import styles from "./styles.module.less";

export default function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
      <Spin tip='Loading...' size='large' />
    </div>
  );
}
