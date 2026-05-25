"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/config/site";

export default function HeroCarousel() {
  const products = siteConfig.products;
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === current) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(index);
        setFading(false);
      }, 250);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [current, goTo, products.length]);

  return (
    <div className="flex flex-col items-center select-none">
      {/* Imagem principal */}
      <div
        className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/25"
        style={{ transition: "opacity 0.25s ease", opacity: fading ? 0 : 1 }}
      >
        <Image
          src={products[current].image}
          alt={products[current].name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 224px, 288px"
          priority
        />
        {/* Label na base */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 to-transparent px-4 py-3">
          <p className="text-white text-sm font-semibold leading-tight">
            {products[current].name}
          </p>
          <p className="text-white/70 text-xs mt-0.5">
            {products[current].sizes.join(" · ")}
          </p>
        </div>
      </div>

      {/* Dots de navegação */}
      <div className="flex gap-2 mt-4 flex-wrap justify-center max-w-[220px]">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ver ${products[i].name}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white w-5 h-1.5"
                : "bg-white/35 hover:bg-white/60 w-1.5 h-1.5"
            }`}
          />
        ))}
      </div>

      {/* Contador */}
      <p className="text-white/50 text-xs mt-2">
        {current + 1} / {products.length} sabores
      </p>
    </div>
  );
}
