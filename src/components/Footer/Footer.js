"use client";

import Image from "next/image";
import Link from "next/link";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      
      {/* Linha separadora sutil */}
      <div className="footer-divider"></div>

      <div className="logo">
        <Image
          src="/images/logo1.png"
          alt="Tom do Corte"
          width={65}
          height={65}
        />
        <span className="footer-span">Tom do Corte</span>
      </div>
      <div>
        <p>© 2026 Tom do Corte. Todos os direitos reservados.</p>
        <p>Avenida de França 971 – Vila Nova de Famalicão, Portugal</p>
      </div>
      <div className="dev">
        <p>Desenvolvido por</p>
        <Link
          href="https://guilhermegarbelini.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Site do desenvolvedor"
        >
          <Image
            src="/images/gdev.png"
            alt="Tom do Corte"
            width={50}
            height={50}
          />
        </Link>
      </div>

    </footer>
  );
}
