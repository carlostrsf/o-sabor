"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { whatsappDefault } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo real */}
        <Link href="/" aria-label={siteConfig.company.name}>
          <Image
            src={siteConfig.brand.logoSvg}
            alt={`Logo ${siteConfig.company.name}`}
            width={160}
            height={130}
            priority
            style={{ height: "110px", width: "auto" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#produtos" className="hover:text-primary transition-colors">Produtos</a>
          <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </nav>

        {/* CTA WhatsApp */}
        <a
          href={whatsappDefault()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-green-500 hover:bg-green-600
                     text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          <WhatsAppIcon size={16} />
          Fale Conosco
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
          <a href="#diferenciais" onClick={() => setMenuOpen(false)}>Diferenciais</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          <a
            href={whatsappDefault()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-2 rounded-full"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
