import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>
            Nossa história
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: "var(--color-primary)" }}>
            Sobre a {siteConfig.company.name}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {siteConfig.company.description}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Acreditamos que alimentação saudável começa com ingredientes de qualidade.
            Por isso, selecionamos cada fruta com cuidado, processamos com higiene e
            congelamos imediatamente para preservar tudo que a natureza criou — sabor,
            cor, aroma e nutrientes.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>10</p>
              <p className="text-sm text-gray-500">Sabores disponíveis</p>
            </div>
            <div className="w-px bg-gray-200 hidden sm:block" aria-hidden="true" />
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>2</p>
              <p className="text-sm text-gray-500">Tamanhos (400g e 1kg)</p>
            </div>
            <div className="w-px bg-gray-200 hidden sm:block" aria-hidden="true" />
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>PF + PJ</p>
              <p className="text-sm text-gray-500">Atendemos todos</p>
            </div>
          </div>
        </div>

        {/* Imagem real da seção */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
          <Image
            src={siteConfig.images.company}
            alt="Ô Sabor - É Natural, É Bom Demais!"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
