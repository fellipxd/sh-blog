import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1024px]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
