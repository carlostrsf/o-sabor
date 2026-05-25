// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";
import type { Lead } from "@/types/database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

function isValidUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

// Supabase anon keys são JWTs — sempre começam com "eyJ" (base64 do header JWT)
function isValidAnonKey(key: string) {
  return key.startsWith("eyJ") && key.length > 50;
}

const isConfigured = isValidUrl(supabaseUrl) && isValidAnonKey(supabaseAnonKey);

if (!isConfigured && process.env.NODE_ENV === "development") {
  console.warn(
    "[Supabase] Não configurado — defina NEXT_PUBLIC_SUPABASE_URL e " +
    "NEXT_PUBLIC_SUPABASE_ANON_KEY válidos no .env.local para ativar o formulário de leads."
  );
}

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export async function saveLead(
  lead: Omit<Lead, "id" | "created_at">
): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    console.warn("[saveLead] Supabase não está configurado.");
    return { success: false, error: "Supabase não configurado. Contate o administrador." };
  }
  try {
    const { error } = await supabase.from("leads").insert([lead]);
    if (error) {
      console.error("[saveLead] Erro ao inserir lead:", error);
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    console.error("[saveLead] Exceção inesperada:", err);
    return { success: false, error: "Erro inesperado ao salvar contato." };
  }
}
