import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="body flex-1  mt-10 mb-28">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
