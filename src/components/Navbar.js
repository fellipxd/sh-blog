import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/home">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="navLink" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="navLink" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="navLink" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="navLink" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="navLink" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="navLink" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>John</span>
          <Link to="/">
            <span>Log out</span>
          </Link>
          <span className="write">
            <Link to="write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
