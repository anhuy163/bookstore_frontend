import Head from "next/head";
import styles from "./styles.module.less";
import { useRouter } from "next/router";
import LoadingScreen from "../../components/LoadingScreen";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks/useRedux";
import { setUser, deleteUser } from "../../app/redux/slices/userSlice";

export default function AuthLayout({ children, title }) {
  // const dispatch = useAppDispatch();
  // const router = useRouter();
  // const [directing, setDirecting] = useState(true);
  // const onDirecting = () => {
  //   setDirecting(false);
  // };
  // useEffect(() => {
  //   if (localStorage.getItem("currentUser")) {
  //     dispatch(setUser(JSON.parse(localStorage.getItem("currentUser"))));
  //   } else {
  //     dispatch(deleteUser());
  //   }
  //   const directTingTimeout = setTimeout(onDirecting, 500);
  //   () => directTingTimeout;
  //   const handleStart = (url) => url !== router.asPath && setDirecting(true);
  //   router.events.on("routeChangeStart", handleStart);
  //   return () => clearTimeout(directTingTimeout);
  // }, []);
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
