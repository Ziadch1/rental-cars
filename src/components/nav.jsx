import React from 'react';
import './styles/styleNav.css'; // Import the CSS file

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./images/logo.png" alt="Car Rental Logo" />
        <span>CAR Rental</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#vehicle-models">Vehicle Models</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="register">Register</button>
      </div>
    </nav>
  );
}

export default Nav;
