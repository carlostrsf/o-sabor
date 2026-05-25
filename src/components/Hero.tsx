import Image from "next/image";
import { siteConfig } from "@/config/site";
import { whatsappDefault } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Hero() {
  return (
    <section
      className="relative min-h-[580px] flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a6640 0%, #2E8B5A 40%, #4D1CBC 100%)" }}
    >
      {/* Decorative fruit emojis background */}
      <div className="absolute inset-0 opacity-10 text-8xl flex flex-wrap gap-8 p-8 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {["🍇","🍹","🥭","🍍","🫐","🍓","🍊","🥝","🍑","🍋"].map((emoji, i) => (
          <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}>
            {emoji}
          </span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10 text-white">
        <div className="max-w-2xl">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🌿 100% Natural · Sem Conservantes
          </span>
          <h1 className="mb-4">
            <Image
              src="/images/brand/nome-osabor.svg"
              alt="Ô Sabor"
              width={320}
              height={100}
              priority
            />
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium opacity-95">
            {siteConfig.company.slogan}
          </p>
          <p className="text-base md:text-lg mb-8 opacity-85 max-w-lg">
            Polpas de frutas congeladas com qualidade premium para famílias e empresas em{" "}
            <strong>{siteConfig.company.location}</strong>.
            10 sabores disponíveis em 400g e 1kg.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappDefault()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600
                         text-white font-bold px-6 py-3 rounded-full text-base transition-colors shadow-lg"
            >
              <WhatsAppIcon size={20} />
              Pedir pelo WhatsApp
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30
                         text-white font-semibold px-6 py-3 rounded-full text-base transition-colors border border-white/30"
            >
              Ver Catálogo 🍹
            </a>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
