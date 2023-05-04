import { Link } from "react-router-dom";
import Logo from "./Logo";
import { BsSearch } from "react-icons/bs";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="px-4 py-2 border-b border-b-gray-300 flex justify-between items-center sticky top-0 bg-white w-full z-30">
      <div className="flex gap-4 items-center justify-between w-1/2">
        <Link to="/home">
          <Logo />
        </Link>
        <div className="bg-gray-50 flex items-center justify-between rounded-3xl px-4 py-1">
          <input
            className="p-1 bg-transparent outline-none"
            type="search"
            placeholder="Search blog..."
            id="search"
          />
          <label className="text-gray-500" htmlFor="search">
            <BsSearch />
          </label>
        </div>
      </div>
      <div className="flex gap-4">
        <Button link="/register" text="Register" />
        <Button link="/login" primary={true} text="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
