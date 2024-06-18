import { useEffect, useState } from "react";

type Dimensions = {
  width: number;
  height: number;
};

export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleSetDimensions = () => {
      const sidebar = document.getElementById("sidebar");
      setDimensions({
        width: window.innerWidth - (sidebar?.clientWidth ?? 0),
        height: window.innerHeight,
      });
    };
    handleSetDimensions();
    window.addEventListener("resize", handleSetDimensions);
    return () => {
      window.removeEventListener("resize", handleSetDimensions);
    };
  }, []);

  return dimensions;
}