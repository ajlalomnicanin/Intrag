import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
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
      
    </>
  );
}

export default Navbar;
