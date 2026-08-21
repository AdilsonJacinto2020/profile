# Portfólio — Adilson dos Santos Jacinto

Portfólio pessoal e catálogo de sistemas web em produção desenvolvidos por mim. O foco principal deste projeto é apresentar soluções de missão crítica reais criadas para clientes em Luanda (Angola), bem como projetos de engenharia desenvolvidos durante a minha formação na 42 Luanda.

## Visão Geral

A aplicação foi desenhada com base em princípios de minimalismo suíço e estética técnica industrial, priorizando alta legibilidade, contraste equilibrado e facilidade de navegação tanto em modo claro quanto em modo escuro.

### Principais Funcionalidades

- **Apresentação de Projetos em Produção**: Detalhamento técnico de sistemas de gestão escolar e oficinas em operação real.
- **Roteamento por Dados (React Router Data API)**: Arquitetura com rotas aninhadas, loaders assíncronos e páginas de especificação individual para cada projeto.
- **Terminal Interativo CLI**: Console embutido para consulta rápida de dados de perfil, competências e comandos diretos.
- **Tema Dinâmico (Claro / Escuro)**: Modo claro construído em tons suaves de papel e zinco para evitar fadiga visual, além de modo escuro técnico com persistência em `localStorage`.
- **Formulário de Contacto**: Integração para envio de mensagens diretas e links para canais profissionais.

## Stack Técnica

- **Frontend**: React 18, Vite
- **Roteamento**: React Router DOM (Data Router com `createBrowserRouter` e `loaders`)
- **Estilização**: Tailwind CSS (arquitetura de tokens via CSS Variables)
- **Tipografia**: Space Grotesk (títulos), Inter (corpo) e JetBrains Mono (código e metadados)
- **Ícones**: Lucide React
- **Serviço de E-mail**: Resend (Vercel Serverless Function em `/api/send`)
- **Deploy**: Vercel / Servidor estático

## Integração de E-mail (Resend)

O formulário de contacto está integrado com a API da [Resend](https://resend.com) através de uma Serverless Function (`api/send.js`) que processa dois envios em paralelo:

1. **Notificação de Contacto**: Envia os detalhes do lead/cliente diretamente para o teu e-mail com formatação técnica de log.
2. **Resposta Automática de Confirmação**: Envia um e-mail de cortesia imediato ao remetente confirmando a receção da mensagem e informando o prazo médio de resposta.

### Variáveis de Ambiente Necessárias

Copia o arquivo de exemplo para criares o teu `.env` local:

```bash
cp .env.example .env
```

Configuração das chaves:

```env
# Backend (Serverless Function / Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=adilson@adijacinto.tech
CONTACT_FROM_EMAIL="Adilson Jacinto <onboarding@resend.dev>"

# Frontend (Vite - personalização dos contactos e perfil)
VITE_PROFILE_NAME="Adilson dos Santos Jacinto"
VITE_PROFILE_ROLE="Desenvolvedor Full-Stack"
VITE_PROFILE_LOCATION="Luanda, Angola"
VITE_CONTACT_EMAIL="adilson@adijacinto.tech"
VITE_CONTACT_WHATSAPP="+244900000000"
VITE_CONTACT_GITHUB="https://github.com/adilsonjacinto"
VITE_CONTACT_LINKEDIN="https://linkedin.com/in/adilsonjacinto"
VITE_CONTACT_WEBSITE="https://adijacinto.tech"
```

> **Nota para Deploy (ex: Vercel, Netlify):** As mesmas variáveis devem ser adicionadas nas configurações de Environment Variables do teu painel de hospedagem.

## Estrutura do Projeto

```text
api/
└── send.js              # Serverless Function para envio de e-mails via Resend
src/
├── components/          # Componentes visuais (Hero, Projects, Skills, Contact, etc.)
├── data/                # Conteúdo estático e dados das soluções
├── layouts/             # Layout principal da aplicação (RootLayout com ScrollRestoration)
├── pages/               # Páginas roteadas (HomePage, ProjectDetailPage, ErrorPage)
├── App.jsx              # Definição das rotas e inicialização do RouterProvider
├── index.css            # Variáveis globais de design e configuração de temas
└── main.jsx             # Ponto de entrada do React
```

## Como Executar Localmente

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/adilsonjacinto/portfolio-adilson.git
   cd portfolio-adilson
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Configurar as variáveis de ambiente:**
   ```bash
   cp .env.example .env
   # Adiciona a tua chave RESEND_API_KEY no arquivo .env
   ```

4. **Iniciar o ambiente de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Gerar build de produção:**
   ```bash
   npm run build
   ```

## Contacto

- **Email**: adilson@adijacinto.tech
- **Website**: [adijacinto.tech](https://adijacinto.tech)
- **LinkedIn**: [linkedin.com/in/adilsonjacinto](https://linkedin.com/in/adilsonjacinto)
- **GitHub**: [github.com/adilsonjacinto](https://github.com/adilsonjacinto)
