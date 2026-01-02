import type { FC } from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen spacing">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
