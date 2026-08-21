export const profile = {
  name: import.meta.env.VITE_PROFILE_NAME || 'Adilson dos Santos Jacinto',
  role: import.meta.env.VITE_PROFILE_ROLE || 'Desenvolvedor Full-Stack',
  location: import.meta.env.VITE_PROFILE_LOCATION || 'Luanda, Angola',
  headline: import.meta.env.VITE_PROFILE_HEADLINE || 'A transformar processos manuais em sistemas web seguros, modernos e escaláveis.',
  summary:
    import.meta.env.VITE_PROFILE_SUMMARY ||
    'Mais de 3 anos de experiência a criar e implantar software de gestão em produção para clientes reais em Luanda — escolas e oficinas — utilizando React, NestJS e PostgreSQL. Aluno do Common Core da 42 Luanda.',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'adilson@adijacinto.tech',
  whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || '+244900000000',
  github: import.meta.env.VITE_CONTACT_GITHUB || 'https://github.com/adilsonjacinto',
  linkedin: import.meta.env.VITE_CONTACT_LINKEDIN || 'https://linkedin.com/in/adilsonjacinto',
  website: import.meta.env.VITE_CONTACT_WEBSITE || 'https://adijacinto.tech',
}

export const systems = [
  { label: 'Sistema Escolar', status: 'online', note: '2 escolas em produção' },
  { label: 'AutoGest (Oficina)', status: 'online', note: 'AutoPagaio em produção' },
  { label: 'Mercado de Previsões', status: 'shipped', note: '42 Luanda · ft_transcendence' },
]

export const projects = [
  {
    id: 'escolar',
    emoji: '🏫',
    title: 'Sistema de Gestão Escolar',
    status: 'Em Produção',
    client: 'Complexos Escolares Gomes e Filadélfia — Luanda',
    description:
      'Digitalização completa de processos académicos e administrativos, substituindo formulários em papel por um fluxo único e auditável.',
    modules: ['Matrículas', 'Lançamento de notas', 'Controlo de cobranças', 'Gestão administrativa'],
    stack: ['React', 'NestJS', 'TypeORM', 'PostgreSQL', 'JWT'],
    impact: 'Centralização de dados, maior velocidade no atendimento e segurança no controlo financeiro.',
  },
  {
    id: 'autogest',
    emoji: '🚗',
    title: 'AutoGest — Gestão para Oficinas',
    status: 'Em Produção',
    client: 'Oficina AutoPagaio',
    description:
      'Plataforma centralizada para automação de atendimento, controlo de frota/manutenção e faturação de uma oficina em funcionamento real.',
    modules: ['Ordens de Serviço (OS)', 'Stock em tempo real', 'Fluxo de caixa', 'Cobranças'],
    stack: ['React', 'NestJS', 'TypeScript', 'PostgreSQL'],
    impact: 'Substituição de cadernos e planilhas soltas por um sistema único de operação diária.',
  },
  {
    id: 'transcendence',
    emoji: '🎮',
    title: 'Mercado de Previsões (ft_transcendence)',
    status: 'Projeto 42',
    client: '42 Luanda — Projeto final do Common Core',
    description:
      'Plataforma gamificada onde utilizadores apostam moedas internas no resultado de exames e eventos reais da 42. Liderança de equipa como Project Owner.',
    modules: ['Autenticação OAuth 2.0', 'Consumo em tempo real da API da 42 Intra', 'Arquitetura full-stack'],
    stack: ['React', 'NestJS', 'Node.js', 'OAuth 2.0', '42 Intra API'],
    impact: 'Liderança técnica de equipa e integração com API externa em produção sob prazo fixo.',
  },
]

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Bootstrap', 'HTML5 / CSS3'],
  },
  {
    category: 'Backend',
    items: ['NestJS', 'Node.js', 'Express', 'Laravel (PHP)', 'APIs RESTful'],
  },
  {
    category: 'Bases de Dados & Segurança',
    items: ['PostgreSQL', 'MySQL', 'TypeORM', 'OAuth 2.0', 'JWT'],
  },
  {
    category: 'Engenharia & Ferramentas',
    items: ['Algoritmos', 'Estruturas de Dados', 'Git / GitHub', 'Debugging'],
  },
]

export const experience = [
  {
    org: 'Adijacinto Tech',
    role: 'Freelancer Full-Stack',
    period: '2023 — Presente',
    description:
      'Ciclo completo de desenvolvimento de software: negociação com clientes, levantamento de requisitos, arquitetura de base de dados e implantação em produção.',
  },
]

export const education = [
  { org: '42 Luanda', detail: 'Ciência da Computação — Common Core Concluído (Fase 1)' },
  { org: 'ISIA', detail: 'Frequência Universitária em Engenharia Informática' },
  { org: 'Instituto Médio 17 de Dezembro', detail: 'Ensino Médio Técnico' },
]

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'C2 — Proficiente' },
  { name: 'Francês', level: 'C1 — Avançado' },
]
