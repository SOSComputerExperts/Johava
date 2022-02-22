import React from "react";

export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    typeof window !== "undefined" && window.innerWidth < 760
      ? setIsMobile(true)
      : setIsMobile(false);
  }, []);
  return isMobile;
};
