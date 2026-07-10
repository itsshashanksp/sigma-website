import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

const base = import.meta.env.BASE_URL;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <div className="logo">
          <img
            src={`${base}sigma-logo.svg`}
            alt="Sigma Software Solutions Logo"
            className="logo-img"
          />
          <h2>Sigma Software Solutions</h2>
        </div>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-links">

            <li>
              <HashLink smooth to={`${base}#home`} onClick={closeMenu}>
                Home
              </HashLink>
            </li>

            <li>
              <HashLink smooth to={`${base}#about`} onClick={closeMenu}>
                About
              </HashLink>
            </li>

            <li>
              <HashLink smooth to={`${base}#services`} onClick={closeMenu}>
                Services
              </HashLink>
            </li>

            <li>
              <HashLink smooth to={`${base}#products`} onClick={closeMenu}>
                Products
              </HashLink>
            </li>

            <li>
              <HashLink smooth to={`${base}#why`} onClick={closeMenu}>
                Why Us
              </HashLink>
            </li>

            <li>
              <HashLink smooth to={`${base}#industries`} onClick={closeMenu}>
                Industries
              </HashLink>
            </li>

            <li>
              <HashLink smooth to={`${base}#locateus`} onClick={closeMenu}>
                Locate Us
              </HashLink>
            </li>

            <li>
              <NavLink to="/enquiry" onClick={closeMenu}>
                Enquiry
              </NavLink>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;