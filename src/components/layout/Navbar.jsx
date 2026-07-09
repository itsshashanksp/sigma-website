import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">

<div className="logo">
    <img
        src={`${import.meta.env.BASE_URL}sigma-logo.svg`}
        alt="Sigma Consultants Logo"
        className="logo-img"
    />

    <h2>Sigma Software Solutions</h2>
</div>

        <nav>
          <ul className="nav-links">
              <li><a href={`${import.meta.env.BASE_URL}#home`}>Home</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#about`}>About</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#services`}>Services</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#products`}>Products</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#why`}>Why us</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#industries`}>Industries</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#locateus`}>Locate Us</a></li>
              <li><NavLink to="/enquiry">Enquiry</NavLink></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
