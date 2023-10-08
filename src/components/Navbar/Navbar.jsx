import { Link } from "react-router-dom";
import images from "../../images/header-logo.png";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav
        className="navbar header-nav other-nav sticky-top navbar-expand-md"
        style={{ backgroundColor: "#2c0047", color: "#fff" }}
      >
        <div className="container menu-nav">
          <Link className="navbar-brand" to={""}>
            <img src={images} className="img-fluid w-75" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className="nav-link active text-white font" to={""}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white font" to={"about"}>
                  About Party
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white font" to={"artist"}>
                  Artist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white font" to={"contact"}>
                  contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white font" to={"lab1"}>
                  Lab1
                </Link>
              </li>
            </ul>
            <button
              className=" btn rounded-pill p-2 font"
              style={{ backgroundColor: "#f7ea66", color: "#80479a" }}
            >
              Get a Ticket
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
