import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Mi Portafolio</h1>
      <ul>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}
