import { useState, useEffect } from "react";

type WindowDimensions = {
  height?: number;
  width?: number;
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    {}
  );
  useEffect(() => {
    const getWindowDimensions = () => {
      const { innerHeight: height, innerWidth: width } = window;
      return {
        height,
        width,
      };
    };
    const handleWindowResize = () => {
      setWindowDimensions(getWindowDimensions);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowDimensions;
}
