# Portfólio — Adilson dos Santos Jacinto

Portfólio pessoal em **React + Vite + Tailwind CSS**, com formulário de contacto que envia
e-mails através da **Resend**.

## Estrutura

```
src/
  components/    Hero, Projects, Skills, Experience, Contact, Nav, Footer
  data/content.js   ← todo o conteúdo (projetos, skills, experiência) num único ficheiro
api/
  send.js        função serverless que fala com a Resend (a chave nunca vai para o browser)
```

Para editar textos, projetos ou skills, basta mexer em **`src/data/content.js`** —
não precisas de tocar nos componentes.

## 1. Instalar e correr localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

> O formulário de contacto só funciona quando publicado na Vercel (ou correndo com
> `vercel dev`), porque precisa da função serverless em `/api/send`. Em `npm run dev`
> puro (só Vite) o pedido a `/api/send` vai falhar — é normal.

## 2. Configurar a Resend

1. Cria conta em [resend.com](https://resend.com) e gera uma API key em
   **API Keys**.
2. (Opcional mas recomendado) Verifica o teu domínio em **Domains** para poderes
   enviar como `contacto@adijacinto.tech` em vez do domínio de teste da Resend.
3. Copia `.env.example` para `.env` e preenche:

```bash
cp .env.example .env
```

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=adilson@adijacinto.tech
CONTACT_FROM_EMAIL="Portfólio <onboarding@resend.dev>"
```

Sem domínio verificado, usa `onboarding@resend.dev` como remetente (funciona,
mas só envia para o teu próprio email de conta Resend). Depois de verificar o
domínio, troca para o teu email.

## 3. Publicar na Vercel (recomendado)

```bash
npm i -g vercel
vercel
```

Depois, no dashboard do projeto na Vercel → **Settings → Environment Variables**,
adiciona `RESEND_API_KEY`, `CONTACT_TO_EMAIL` e `CONTACT_FROM_EMAIL`
(os mesmos valores do `.env`). Faz redeploy.

A pasta `api/` é detetada automaticamente pela Vercel como funções serverless —
não precisas de configurar nada além das variáveis de ambiente.

### Testar localmente com as funções a funcionar

```bash
vercel dev
```

Isto corre o Vite **e** a função `/api/send` juntos, tal como em produção.

## 4. Personalizar

- **Conteúdo (projetos, skills, experiência, links):** `src/data/content.js`
- **Cores / tipografia:** `tailwind.config.js` (paleta `ink`, `paper`, `signal`, `ok`)
- **WhatsApp e email reais:** `profile.whatsapp` e `profile.email` em `content.js`

## 5. Build de produção

```bash
npm run build
npm run preview
```

Os ficheiros finais ficam em `dist/`.

---

### Nota sobre o número de WhatsApp

O ficheiro `src/data/content.js` tem um número de exemplo
(`+244900000000`). Substitui pelo teu número real antes de publicares.
