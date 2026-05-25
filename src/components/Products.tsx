import Image from "next/image";
import { siteConfig } from "@/config/site";
import { whatsappProduct, whatsappB2B } from "@/lib/whatsapp";

export default function Products() {
  const products = [...siteConfig.products];
  if (products.length === 0) return null;

  return (
    <section id="produtos" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>
            Nosso catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ color: "var(--color-primary)" }}>
            Nossas Polpas de Fruta
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            10 sabores naturais, disponíveis em pacotes de{" "}
            <strong>400g</strong> e <strong>1kg</strong>. Sem conservantes,
            sem corantes — só fruta de verdade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl
                         transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Imagem real do produto */}
              <div className="aspect-square relative bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-bold mb-1 text-gray-800">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-3 flex-1 leading-relaxed">
                  {product.description}
                </p>

                {/* Tamanhos disponíveis */}
                <div className="flex gap-2 mb-3">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="text-xs font-semibold px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: "var(--color-primary)",
                        color: "var(--color-primary)",
                      }}
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <a
                  href={whatsappProduct(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-500 hover:bg-green-600
                             text-white text-sm font-semibold py-2 rounded-xl
                             transition-colors"
                >
                  Pedir pelo WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA empresas */}
        <div
          className="mt-12 rounded-2xl p-8 text-center text-white"
          style={{ background: "linear-gradient(135deg, var(--color-secondary), var(--color-primary))" }}
        >
          <p className="text-lg font-bold mb-2">
            🏪 É restaurante, sorveteria ou distribuidora?
          </p>
          <p className="text-sm opacity-90 mb-4">
            Temos condições especiais para compras em maior volume. Fale com a gente!
          </p>
          <a
            href={whatsappB2B()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white font-bold px-6 py-3 rounded-full
                       text-sm hover:bg-gray-100 transition-colors"
            style={{ color: "var(--color-secondary)" }}
          >
            Falar sobre pedido PJ →
          </a>
        </div>
      </div>
    </section>
  );
}
