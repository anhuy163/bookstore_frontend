import HeaderPC from "./HeaderPC";
import HeaderMB from "./HeaderMB";
import useWindowDimensions from "../../app/hooks/useWindowDimensions";
import { useState } from "react";

export default function MyHeader() {
  const { height: currentWindowHeight, width: currentWindowWidth } =
    useWindowDimensions();

  return currentWindowWidth < 576 ? <HeaderMB /> : <HeaderPC />;
}
