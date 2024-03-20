import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import "../style/Navbar.css";
import slika from "../components/photo/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={slika} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">O nama</Link>
          </li>
          <li>
            <Link to="/Products/:id">Proizvodi</Link>
          </li>
          <li>
            <Link to="/Contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <MdOutlineEmail className="email" />
    </div>
  );
};
export default Navbar;
