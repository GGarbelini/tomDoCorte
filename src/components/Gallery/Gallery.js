"use client";

import { useState, useEffect } from "react";
import "./Gallery.css";
import { FaInstagram } from "react-icons/fa";

const images = [
  
  "/tomDoCorte/images/corte1.png",
  "/tomDoCorte/images/corte3.png",
  "/tomDoCorte/images/corte5.png",
  "/tomDoCorte/images/corte6.png",
  "/tomDoCorte/images/corte7.png",
  "/tomDoCorte/images/corte8.png",

];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);

  // ✅ Correção SSR-safe (Next.js / Vercel)
  useEffect(() => {
    const handleResize = () => {
      setVisibleImages(window.innerWidth > 768 ? 3 : 1);
    };

    handleResize(); // roda ao montar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const display = [];
  for (let i = 0; i < visibleImages; i++) {
    display.push(images[(current + i) % images.length]);
  }

  return (
    <section id="gallery" className="gallery">
      <h2>Galeria</h2>

      <div className="carousel">
        <button className="prev" onClick={prev}>
          &#10094;
        </button>

        <div className="carousel-track">
          {display.map((img, index) => (
            <img key={index} src={img} alt={`Corte ${index + 1}`} />
          ))}
        </div>

        <button className="next" onClick={next}>
          &#10095;
        </button>
      </div>

      {/* Instagram follow */}
      <div className="instagram-follow">
        <a
          href="https://www.instagram.com/tomdocorteoficial"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-icon"
        >
          <FaInstagram />
          <span className="tooltip">Siga no Instagram</span>
        </a>
      </div>
    </section>
  );
}
