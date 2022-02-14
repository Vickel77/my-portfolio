import { createContext, ReactNode, useLayoutEffect, useState } from "react";

const DeviceWidth = createContext<boolean | undefined>(false);

export const MobileResizeContext = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const CheckDeviceWidth = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
      console.log("mobile screen", isMobile);
    } else {
      setIsMobile(false);
      console.log("wide screen, isMobile:", isMobile);
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("load", CheckDeviceWidth);
    window.addEventListener("resize", CheckDeviceWidth);
    return () => {
      window.removeEventListener("load", CheckDeviceWidth);
      window.removeEventListener("resize", CheckDeviceWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DeviceWidth.Provider value={isMobile}>{children}</DeviceWidth.Provider>
  );
};

export default DeviceWidth;
