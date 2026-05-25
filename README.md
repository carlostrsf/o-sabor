# Ô Sabor — Site Institucional

Site profissional para a **Ô Sabor**, empresa de polpas de frutas naturais congeladas em Natal/RN.

---

## Como publicar o site (3 passos rápidos)

### PASSO 1 — Criar conta gratuita no Supabase (~2 min)

1. Acesse https://supabase.com e clique em "Start your project"
2. Crie conta (pode usar o Google)
3. Clique em "New project" e preencha:
   - Name: o-sabor
   - Region: South America (São Paulo)
4. Aguarde ~2 minutos

### PASSO 2 — Configurar banco de dados (~2 min)

1. No Supabase, clique em "SQL Editor" → "New query"
2. Cole e execute o SQL abaixo:

```sql
create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text not null,
  customer_type text,
  message text,
  created_at timestamptz default now()
);
alter table leads enable row level security;
create policy "insert_leads" on leads for insert with check (true);
create policy "select_leads" on leads for select using (auth.role() = 'authenticated');
```

3. Vá em Settings → API e copie a URL e a chave "anon public"
4. Preencha o arquivo .env.local com essas informações

### PASSO 3 — Publicar no Vercel via GitHub (~2 min)

1. Crie repositório no GitHub chamado "o-sabor"
2. Rode os comandos abaixo no terminal:

```bash
git init
git add .
git commit -m "Site O Sabor - versao inicial"
git remote add origin https://github.com/SEU_USUARIO/o-sabor.git
git push -u origin main
```

3. No Vercel (vercel.com), importe o repositório do GitHub
4. Adicione as variáveis de ambiente do Supabase
5. Deploy! Seu site está no ar!

---

## Segurança - IMPORTANTE

- anon public: pode usar no site (normal)
- service_role: NUNCA compartilhe com ninguém!
- Se vazar a service_role: Supabase → Settings → API → Reset

