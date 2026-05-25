// src/lib/whatsapp.ts
import { siteConfig } from "@/config/site";

const BASE = `https://wa.me/${siteConfig.company.whatsapp}`;

export const whatsappDefault = () =>
  `${BASE}?text=${encodeURIComponent(
    "Olá! Vim pelo site da Ô Sabor e gostaria de saber mais sobre as polpas de frutas."
  )}`;

export const whatsappProduct = (productName: string) =>
  `${BASE}?text=${encodeURIComponent(
    `Olá! Vim pelo site da Ô Sabor e tenho interesse na ${productName}. Pode me dar mais informações?`
  )}`;

export const whatsappB2B = () =>
  `${BASE}?text=${encodeURIComponent(
    "Olá! Sou empresa e gostaria de saber sobre fornecimento das polpas Ô Sabor."
  )}`;
