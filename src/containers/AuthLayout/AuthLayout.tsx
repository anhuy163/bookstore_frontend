import Head from "next/head";
import styles from "./styles.module.less";

export default function AuthLayout({ children, title }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
