import Image from "next/image";
import { siteConfig } from "@/config/site";
import { whatsappDefault } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#1a1a2e" }} className="text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Logo + descrição */}
        <div>
          <Image
            src={siteConfig.brand.logoSvg}
            alt={`Logo ${siteConfig.company.name}`}
            width={100}
            height={80}
            style={{ height: "72px", width: "auto", marginBottom: "12px" }}
          />
          <p className="text-sm leading-relaxed opacity-75">
            Polpas de frutas naturais congeladas para famílias e empresas.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contato</h4>
          <div className="space-y-2 text-sm">
            <p>📍 {siteConfig.company.address}</p>
            <p className="opacity-75 text-xs">
              {siteConfig.company.neighborhood} — {siteConfig.company.location}
            </p>
            <p className="opacity-75 text-xs">CEP {siteConfig.company.zipCode}</p>
            <a
              href={whatsappDefault()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-green-400 transition-colors"
            >
              📱 {siteConfig.company.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div>
          <h4 className="text-white font-semibold mb-3">Siga a gente</h4>
          <a
            href={siteConfig.company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-pink-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @osaborpolpas
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500 space-y-1">
        <p>{siteConfig.company.legalName} — CNPJ: {siteConfig.company.cnpj}</p>
        <p>© {currentYear} {siteConfig.company.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
