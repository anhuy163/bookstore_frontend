import styles from "./styles.module.less";

export default function FormWrapper({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
