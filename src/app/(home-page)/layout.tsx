'use client'
import React from "react";

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  React.useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
          locomotiveScroll
      }
    )()

  }, [])
  return (
    <div className="bg-black-state bg-noise-bg bg-contain">
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default Layout;
