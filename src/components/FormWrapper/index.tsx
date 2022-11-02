import styles from "./styles.module.less";
import { Spin } from "antd";

export default function FormWrapper({ children, loading = false, ...props }) {
  return loading ? (
    <div className={styles.loadingWrapper}>
      <Spin tip='Loading...' size='large'>
        <div {...props}>{children}</div>
      </Spin>
    </div>
  ) : (
    <div {...props}>{children}</div>
  );
}
