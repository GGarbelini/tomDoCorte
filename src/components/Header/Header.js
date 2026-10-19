"use client";

import { useState } from "react";
import Image from "next/image"; 
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Image
          src="/tomDoCorte/images/logo1.png"
          alt="Tom do Corte"
          width={80}   
          height={80}  
        />
        <span>Tom do Corte</span>
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>Início</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Galeria</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
