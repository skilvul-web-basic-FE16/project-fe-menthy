import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <nav className={color ? "navbar navbar-expand-lg fixed-top navbar-dark nav-bg" : "navbar navbar-expand-lg fixed-top navbar-dark"}>
      <div className="container">
        <Link className="navbar-brand fw-bold color-success fs-4" to={"/"}>
          Menthy.
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center align-items-center">
            <li className="nav-item">
              <Link className="nav-link active mx-1 fw-semibold" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active mx-1 fw-semibold" to={"/article"}>
                Article
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  btn  mx-1  fw-semibold" to={"/login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-success  mx-1  fw-semibold text-white" to={"/signup"}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
