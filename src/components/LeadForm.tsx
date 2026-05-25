"use client";

import { useState, useRef } from "react";
import { saveLead } from "@/lib/supabase";

type FormState = "idle" | "submitting" | "success" | "error";

/**
 * Fix C1: Remove prefixo de país 55 (Brasil) antes de formatar.
 * Evita que colar "+5584999779364" produza DDD errado "(55) 8 4999-...".
 */
function stripCountryCode(digits: string): string {
  if (digits.startsWith("55") && digits.length > 11) {
    return digits.slice(2);
  }
  return digits;
}

/**
 * Formata progressivamente para o padrão brasileiro com correção C1 embutida.
 * 10 dígitos → (XX) XXXX-XXXX  (fixo)
 * 11 dígitos → (XX) X XXXX-XXXX (celular)
 */
function formatPhone(raw: string): string {
  const d = stripCountryCode(raw.replace(/\D/g, "")).slice(0, 11);
  const n = d.length;
  if (n === 0) return "";
  if (n <= 2) return `(${d}`;
  if (n <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (n <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`;
}

export default function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const phoneRef = useRef<HTMLInputElement>(null); // Fix C2: ref para restaurar cursor

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target;
    const selStart = input.selectionStart ?? 0;

    // Fix C2: conta dígitos antes do cursor para restaurar posição após re-render
    const digitsBeforeCursor = input.value
      .slice(0, selStart)
      .replace(/\D/g, "").length;

    const formatted = formatPhone(input.value);
    setPhoneValue(formatted);

    // Fix C2: restaura cursor na posição correta após React re-renderizar
    requestAnimationFrame(() => {
      if (!phoneRef.current) return;
      let digitCount = 0;
      let pos = formatted.length; // padrão: fim da string
      for (let i = 0; i < formatted.length; i++) {
        if (/\d/.test(formatted[i])) digitCount++;
        if (digitCount === digitsBeforeCursor) {
          pos = i + 1;
          break;
        }
      }
      phoneRef.current.setSelectionRange(pos, pos);
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const phone = data.get("phone");

    if (
      typeof name !== "string" || !name.trim() ||
      typeof phone !== "string" || !phone.trim()
    ) {
      setState("error");
      setErrorMsg("Por favor, preencha nome e telefone.");
      return;
    }

    // Extrai apenas dígitos para validação e construção do E.164
    const digitsOnly = phone.replace(/\D/g, "");

    if (digitsOnly.length < 10) {
      setState("error");
      setErrorMsg("Informe o DDD antes do número. Ex: (84) 9 9999-9999");
      return;
    }
    // Fix C3: guard > 11 removido — formatPhone já limita a 11 dígitos via .slice(0,11)

    // Fix C4: armazena em E.164 puro (+55 + dígitos) em vez da string mascarada
    const phoneE164 = `+55${digitsOnly}`;

    const rawCustomerType = data.get("customer_type");
    const customerType =
      typeof rawCustomerType === "string" && rawCustomerType !== ""
        ? rawCustomerType
        : null;

    const rawMessage = data.get("message");
    const message =
      typeof rawMessage === "string" && rawMessage.trim() !== ""
        ? rawMessage.trim()
        : null;

    try {
      const result = await saveLead({
        name: name.trim(),
        phone: phoneE164,
        customer_type: customerType,
        message,
      });

      if (result.success) {
        setState("success");
        setPhoneValue("");
        form.reset();
      } else {
        setState("error");
        setErrorMsg(result.error ?? "Erro ao enviar. Tente novamente.");
      }
    } catch (err) {
      console.error("[LeadForm] Erro inesperado:", err);
      setState("error");
      setErrorMsg("Erro de conexão. Verifique sua internet e tente novamente.");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="text-4xl mb-3" aria-hidden="true">✅</div>
        <h3 className="text-lg font-bold text-green-800 mb-1">Mensagem enviada!</h3>
        <p className="text-sm text-green-700">
          Recebemos seu contato. Vamos te responder em breve pelo WhatsApp!
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-4 text-sm text-green-700 underline hover:no-underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-gray-50 p-8 space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Ou deixe seu contato</h3>
      <p className="text-sm text-gray-500 -mt-2">
        Preferiu não abrir o WhatsApp agora? Preencha abaixo e entramos em contato com você!
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome *
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            placeholder="Seu nome completo"
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm
                       focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
          />
        </div>

        <div>
          <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp / Telefone * <span className="text-gray-400 font-normal">(com DDD)</span>
          </label>
          <div className="flex rounded-xl border border-gray-200 bg-white overflow-hidden
                          focus-within:ring-2 focus-within:ring-green-400">
            <span className="flex items-center px-3 text-sm font-medium text-gray-500 bg-gray-100 border-r border-gray-200 select-none">
              +55
            </span>
            {/* Fix C5: required é decorativo (para :required CSS e acessibilidade);
                e.preventDefault() suprime validação nativa — bloqueio real é via JS acima.
                Fix C6: inputMode removido — type="tel" já abre teclado de telefone no mobile */}
            <input
              ref={phoneRef}
              id="lead-phone"
              name="phone"
              type="tel"
              required
              placeholder="(84) 9 9999-9999"
              value={phoneValue}
              onChange={handlePhoneChange}
              className="flex-1 px-3 py-2.5 text-sm focus:outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="lead-type" className="block text-sm font-medium text-gray-700 mb-1">
          Você é…
        </label>
        <select
          id="lead-type"
          name="customer_type"
          className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm
                     focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
        >
          <option value="">Selecione (opcional)</option>
          <option value="PF">Pessoa Física — compra para casa</option>
          <option value="PJ">Pessoa Jurídica — restaurante, sorveteria, etc.</option>
        </select>
      </div>

      <div>
        <label htmlFor="lead-message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem (opcional)
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={3}
          placeholder="Qual sabor te interessa? Tem alguma dúvida?"
          className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm
                     focus:outline-none focus:ring-2 focus:ring-green-400 bg-white resize-none"
        />
      </div>

      {state === "error" && (
        <p role="alert" className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-2">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-60 disabled:cursor-not-allowed
                   text-white font-bold py-3 rounded-xl text-sm transition-colors"
      >
        {state === "submitting" ? "Enviando…" : "Enviar mensagem"}
      </button>
    </form>
  );
}
