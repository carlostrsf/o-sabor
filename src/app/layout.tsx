import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (raw) return raw.startsWith("http") ? raw : `https://${raw}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(resolveSiteUrl()),
  title: {
    default: siteConfig.company.name,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.company.description,
  keywords: [
    siteConfig.company.name,
    "polpa de fruta",
    "polpa congelada",
    "frutas naturais",
    "Natal RN",
    "Rio Grande do Norte",
    "suco natural",
  ],
  openGraph: {
    title: siteConfig.company.name,
    description: siteConfig.company.description,
    images: [{ url: siteConfig.brand.logo, width: 512, height: 512 }],
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: siteConfig.brand.favicon },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
