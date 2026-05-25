import { siteConfig } from "@/config/site";

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Nossos diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">
            Por que escolher a {siteConfig.company.name}?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.differentials.map((diff) => (
            <div
              key={diff.title}
              className="text-center p-6 rounded-2xl border border-gray-100 hover:border-primary
                         hover:shadow-md transition-all duration-300"
            >
              <div className="text-5xl mb-4" aria-hidden="true">{diff.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{diff.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{diff.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
