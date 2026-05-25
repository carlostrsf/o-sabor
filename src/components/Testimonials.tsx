import { siteConfig } from "@/config/site";

export default function Testimonials() {
  const testimonials = [...siteConfig.testimonials];
  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Quem já provou aprovou
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.customerName}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
            >
              <div className="text-3xl mb-3" aria-hidden="true">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-4 flex-1 leading-relaxed">
                &ldquo;{t.comment}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))" }}
                  aria-hidden="true"
                >
                  {t.customerName.charAt(0)}
                </div>
                <p className="font-semibold text-gray-800">{t.customerName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
