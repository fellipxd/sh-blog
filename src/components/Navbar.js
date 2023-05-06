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
    <nav className="px-4 py-2 border-b border-b-gray-300 flex justify-between gap-4 items-center sticky top-0 bg-white w-full z-30  mx-auto max-w-[1500px]">
      <div>
        <Link to={!userId ? "/" : "/home"}>
          <Logo />
        </Link>
      </div>
      <div className=" bg-gray-50 flex items-center justify-center md:justify-between rounded-full w-12 h-12 md:h-auto md:rounded-3xl md:px-4 md:py-1 md:w-1/2">
          <input
            className="p-1 bg-transparent outline-none md:block hidden"
            type="search"
            placeholder="Search blog..."
            id="search"
          />
          <label className="text-gray-500" htmlFor="search">
            <BsSearch />
          </label>
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
