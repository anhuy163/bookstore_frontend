import React from "react";
import LoadingScreen from "../components/LoadingScreen";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../app/hooks/useRedux";
import { deleteUser, setUser } from "../app/redux/slices/userSlice";
import { setCart } from "../app/redux/slices/cartSlice";
import useLazyQueryGetUserProfile from "../app/hooks/useLazyQueryGetUserProfile";
import useLazyQueryGetCart from "../app/hooks/useLazyQueryGetCart";

export default function RouteGuard({ children }) {
  // const cart = useAppSelector((state) => state.cart);
  // const user = useAppSelector((state) => state.user);
  const { fetchData: fetchUserProfile, loading: isFetchingProfile } =
    useLazyQueryGetUserProfile();
  const { fetchData: fetchCart, loading: isFetchingCart } =
    useLazyQueryGetCart();

  // console.log(userCart);
  // console.log(cart);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const [directing, setDirecting] = useState(true);
  const onDirecting = () => {
    setDirecting(false);
  };

  useEffect(() => {
    if (!!localStorage.getItem("currentUser")) {
      fetchUserProfile(true).then(() =>
        dispatch(setUser(JSON.parse(localStorage.getItem("currentUser"))))
      );
      fetchCart(true).then(() =>
        dispatch(setCart(JSON.parse(localStorage.getItem("cart"))))
      );
    } else {
      dispatch(deleteUser());
    }

    const directTingTimeout = setTimeout(onDirecting, 500);
    () => directTingTimeout;
    const handleStart = (url) => url !== router.asPath && setDirecting(true);
    router.events.on("routeChangeStart", handleStart);
    return () => clearTimeout(directTingTimeout);
  }, [router.pathname, router.query, router.asPath]);

  return (
    <>
      {directing || isFetchingCart || isFetchingProfile ? (
        <LoadingScreen />
      ) : (
        children
      )}
    </>
  );
}


