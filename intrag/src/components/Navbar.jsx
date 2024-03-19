import { Link } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";
import "../style/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <img src="" alt="" />
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
      <AiFillMessage />
    </div>
  );
}

export default Navbar;
