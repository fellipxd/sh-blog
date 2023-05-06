import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { BsSearch } from "react-icons/bs";
import Button from "./Button";

const Navbar = () => {
  const userId = sessionStorage.getItem("id");
  const username = sessionStorage.getItem("username");

  const navigate = useNavigate();

  const user = () => {
    navigate("/user")
  }

  const logout = () => {
    sessionStorage.clear("username");
    sessionStorage.clear("id");
    navigate("/");
  };

  return (
    <nav className="px-4 py-2 border-b border-b-gray-300 flex flex-wrap justify-between items-center sticky top-0 bg-white w-full z-30">
      <div className="flex gap-4 items-center justify-between w-1/2">
        <Link to={!userId ? "/" : "/home"}>
          <Logo />
        </Link>
        <div className=" hidden bg-gray-50 md:flex items-center justify-between rounded-3xl px-4 py-1">
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
      {!userId ? (
        <div className="flex gap-4">
          <Button link="/register" text="Register" />
          <Button link="/login" primary={true} text="Login" />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <span onClick={user}>{username}</span>
          <span
            onClick={logout}
            className=" border-l-2 pl-4 font-bold hover:text-purple-700 cursor-pointer"
          >
            Logout
          </span>
          <Button link="/write" text="Write Blog" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
