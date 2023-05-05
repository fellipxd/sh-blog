import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex justify-center w-full">
      <div>
        <Navbar />
        <div className="w-full max-w-[1500px]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
