"use client";
import { whatsappDefault } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappDefault()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "56px",
        height: "56px",
        backgroundColor: "#22c55e",
        borderRadius: "50%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        color: "white",
      }}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
