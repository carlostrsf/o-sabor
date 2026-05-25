// src/config/site.ts
export const siteConfig = {
  company: {
    name: "Ô Sabor",
    segment: "Polpa de Frutas",
    slogan: "Saúde na sua mesa!",
    description:
      "A Ô Sabor oferece polpas de frutas naturais congeladas com qualidade premium, para famílias e empresas. Uva, maracujá, manga, acerola, cajá, mangaba, tamarindo, goiaba, abacaxi e muito mais — sempre frescas, sempre saborosas.",
    whatsapp: "5584999779364",
    phoneDisplay: "(84) 99977-9364",
    instagram: "https://www.instagram.com/osaborpolpas",
    email: "",
    location: "Natal, Rio Grande do Norte",
    legalName: "Souto Medeiros Comercio LTDA",
    cnpj: "46.060.010/0001-13",
    address: "Rua Nova Iguaçu, 2917",
    neighborhood: "Potengi",
    zipCode: "59112-480",
  },

  brand: {
    primaryColor: "#2E8B5A",
    secondaryColor: "#4D1CBC",
    accentColor: "#F47C20",
    logo: "/images/brand/logo.png",      // raster — usado em OG image e favicon
    logoSvg: "/images/brand/logo.svg",   // vetorial — usado em Header e Footer
    favicon: "/faviconosabor.png",
  },

  images: {
    company: "/images/company/imagem_secaohistorianew.png",
    gallery: [] as string[],
  },

  products: [
    {
      name: "Polpa de Uva",
      description: "Polpa de uva natural congelada. Disponível em embalagens de 400g e 1kg. Perfeita para sucos, vitaminas e sobremesas.",
      image: "/images/products/polpa-uva.png",
      sizes: ["400g", "1kg"],
    },
    {
      name: "Polpa de Maracujá",
      description: "Polpa de maracujá natural congelada. Disponível em embalagens de 400g e 1kg. Acidez perfeita para sucos e doces.",
      image: "/images/products/polpa-maracuja.png",
      sizes: ["400g", "1kg"],
    },
    {
      name: "Polpa de Manga",
      description: "Polpa de manga natural congelada. Disponível em embalagens de 400g e 1kg. Doce e saborosa, ideal para vitaminas.",
      image: "/images/products/polpa-manga.png",
      sizes: ["400g", "1kg"],
    },
    {
      name: "Polpa de Acerola",
      description: "Polpa de acerola natural congelada. Disponível em embalagens de 400g e 1kg. Rica em vitamina C, ótima para sucos.",
      image: "/images/products/polpa-acerola.png",
      sizes: ["400g", "1kg"],
    },
    {
      name: "Polpa de Cajá",
      description: "Polpa de cajá natural congelada. Disponível em embalagens de 400g e 1kg. Sabor nordestino autêntico e refrescante.",
      image: "/images/products/polpa-caja.png",
      sizes: ["400g", "1kg"],
    },
    {
      name: "Polpa de Mangaba",
      description: "Polpa de mangaba natural congelada. Disponível em embalagens de 400g e 1kg. Fruta típica nordestina de sabor único.",
      image: "/images/products/polpa-mangaba.png",
      sizes: ["400g", "1kg"],
    },
    {
      name: "Polpa de Tamarindo",
      description: "Polpa de tamarindo natural congelada. Disponível em embalagens de 400g e 1kg. Sabor marcante para sucos e culinárias.",
      image: "/images/products/polpa-tamarindo.png",
      sizes: ["400g", "1kg"],
    },
    {
      name: "Polpa de Goiaba",
      description: "Polpa de goiaba natural congelada. Disponível em embalagens de 400g e 1kg. Cremosa e saborosa, ideal para sobremesas.",
      image: "/images/products/polpa-goiaba.png",
      sizes: ["400g", "1kg"],
    },
    {
      name: "Polpa de Abacaxi",
      description: "Polpa de abacaxi natural congelada. Disponível em embalagens de 400g e 1kg. Refrescante e tropical para o dia a dia.",
      image: "/images/products/polpa-abacaxi.png",
      sizes: ["400g", "1kg"],
    },
    {
      name: "Polpa de Abacaxi com Hortelã",
      description: "Polpa de abacaxi com hortelã natural congelada. Disponível em embalagens de 400g e 1kg. Combinação refrescante e aromática.",
      image: "/images/products/polpa-abacaxi-hortela.png",
      sizes: ["400g", "1kg"],
    },
  ],

  services: [],

  differentials: [
    {
      icon: "🌿",
      title: "100% Natural",
      text: "Nossas polpas são feitas de frutas selecionadas, sem conservantes artificiais. Você recebe o sabor verdadeiro da natureza.",
    },
    {
      icon: "❄️",
      title: "Congelamento Imediato",
      text: "As frutas são processadas e congeladas rapidamente para preservar todos os nutrientes, vitaminas e o sabor fresco.",
    },
    {
      icon: "📦",
      title: "Praticidade no Dia a Dia",
      text: "Pacotes de 400g e 1kg, perfeitos para famílias, restaurantes e sorveterias. Pronto para usar quando você precisar.",
    },
    {
      icon: "🤝",
      title: "Atendemos PF e PJ",
      text: "Vendemos para famílias e também para empresas como bares, restaurantes, sorveterias e distribuidores em Natal/RN.",
    },
  ],

  successCases: [],
  beforeAfter: [],
  testimonials: [
    {
      customerName: "Ana Lima",
      comment: "As polpas da Ô Sabor são incríveis! Uso todo dia no café da manhã. O sabor do cajá é idêntico ao da fruta fresca.",
      image: null,
    },
    {
      customerName: "Restaurante Maré Alta",
      comment: "Fornecimento rápido e polpas de altíssima qualidade. Nossos clientes adoram os sucos feitos com os produtos da Ô Sabor!",
      image: null,
    },
    {
      customerName: "Fernanda Souza",
      comment: "Compro o pacote de 1kg toda semana. A polpa de maracujá é simplesmente perfeita para fazer mousse e suco.",
      image: null,
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
