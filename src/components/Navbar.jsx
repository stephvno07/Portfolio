import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Stephanie's Portfolio</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="menu">&#9776;</div>
    </nav>
  );
}