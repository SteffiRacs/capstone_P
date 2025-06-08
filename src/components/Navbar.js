import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" style={{ height: '50px' }} />
        </Link>

        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse menu with ms-auto to align right */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-3"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item px-3"><Link className="nav-link" to="/">About</Link></li>
            <li className="nav-item px-3"><Link className="nav-link" to="/">Menu</Link></li>
            <li className="nav-item px-3"><Link className="nav-link" to="/booking">Reservations</Link></li>
            <li className="nav-item px-3"><Link className="nav-link" to="/">Order Online</Link></li>
            <li className="nav-item ps-3"><Link className="nav-link" to="/">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
    
  );
}

export default Navbar;
