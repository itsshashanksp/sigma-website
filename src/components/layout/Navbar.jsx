import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <div className="logo">
          <img
            src={`${import.meta.env.BASE_URL}sigma-logo.svg`}
            alt="Sigma Software Solutions Logo"
            className="logo-img"
          />
          <h2>Sigma Software Solutions</h2>
        </div>

        {/* Mobile Menu Button */}
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
              <a
                href={`${import.meta.env.BASE_URL}#home`}
                onClick={closeMenu}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href={`${import.meta.env.BASE_URL}#about`}
                onClick={closeMenu}
              >
                About
              </a>
            </li>

            <li>
              <a
                href={`${import.meta.env.BASE_URL}#services`}
                onClick={closeMenu}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href={`${import.meta.env.BASE_URL}#products`}
                onClick={closeMenu}
              >
                Products
              </a>
            </li>

            <li>
              <a
                href={`${import.meta.env.BASE_URL}#why`}
                onClick={closeMenu}
              >
                Why Us
              </a>
            </li>

            <li>
              <a
                href={`${import.meta.env.BASE_URL}#industries`}
                onClick={closeMenu}
              >
                Industries
              </a>
            </li>

            <li>
              <a
                href={`${import.meta.env.BASE_URL}#locateus`}
                onClick={closeMenu}
              >
                Locate Us
              </a>
            </li>

            <li>
              <NavLink
                to="/enquiry"
                onClick={closeMenu}
              >
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
