import { HeaderBar } from "../Components";
import React from "react";
import Footer from "../features/layouts/Footer";

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  return (
    <div className="bg-black-state bg-noise-bg bg-contain">
      <div className="overflow-y-auto h-screen scrollbar-hide">
        <HeaderBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
