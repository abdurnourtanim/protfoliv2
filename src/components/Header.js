import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <NavLinks />
    </header>
  );
};

export default Header;
