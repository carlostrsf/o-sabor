import { siteConfig } from "@/config/site";
import { whatsappDefault, whatsappB2B } from "@/lib/whatsapp";
import LeadForm from "@/components/LeadForm";

export default function Contact() {
  const waLink = whatsappDefault();
  const waB2B = whatsappB2B();

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Entre em contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">
            Fale com a {siteConfig.company.name}
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Quer fazer um pedido ou tirar dúvidas? Chama a gente no WhatsApp —
            é rápido e sem complicação!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* WhatsApp PF */}
          <div
            className="rounded-2xl p-8 text-white text-center"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <div className="text-5xl mb-4" aria-hidden="true">👤</div>
            <h3 className="text-xl font-bold mb-2">Pessoa Física</h3>
            <p className="text-sm opacity-90 mb-6">
              Quer comprar polpas para sua família? Fale com a gente e receba
              seu pedido fresquinho!
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 font-bold px-6 py-3
                         rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              Fazer Pedido →
            </a>
          </div>

          {/* WhatsApp PJ */}
          <div
            className="rounded-2xl p-8 text-white text-center"
            style={{ background: "linear-gradient(135deg, var(--color-secondary), var(--color-primary))" }}
          >
            <div className="text-5xl mb-4" aria-hidden="true">🏪</div>
            <h3 className="text-xl font-bold mb-2">Pessoa Jurídica</h3>
            <p className="text-sm opacity-90 mb-6">
              Restaurante, sorveteria, bar, distribuidora? Temos condições
              especiais para pedidos em volume!
            </p>
            <a
              href={waB2B}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-700 font-bold px-6 py-3
                         rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              Falar sobre Fornecimento →
            </a>
          </div>
        </div>

        {/* Formulário de captura de lead */}
        <div className="mt-8">
          <LeadForm />
        </div>

        {/* Info rápida */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            📱 {siteConfig.company.phoneDisplay}
          </span>
          <a
            href={siteConfig.company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            📸 @osaborpolpas
          </a>
        </div>
      </div>
    </section>
  );
}
