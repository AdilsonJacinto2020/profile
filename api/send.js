// Vercel Serverless Function — POST /api/send
// Envia o e-mail para o Adilson e envia uma resposta automática de confirmação para o utilizador via Resend.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Método não permitido.' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Preenche nome, email e mensagem.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido.' })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'adilson@adijacinto.tech'
  const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Adilson Jacinto <onboarding@resend.dev>'

  if (!RESEND_API_KEY) {
    return res.status(500).json({ error: 'Servidor de e-mail não configurado (RESEND_API_KEY em falta).' })
  }

  try {
    // 1. Enviar notificação para o Adilson com os dados do cliente
    const adminNotificationPromise = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[Portfólio] Nova Mensagem de ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0B0D11; color: #F4F5F7; border: 1px solid #232936; padding: 28px;">
            <div style="border-bottom: 1px solid #232936; padding-bottom: 16px; margin-bottom: 20px;">
              <span style="font-family: monospace; font-size: 11px; color: #FF4D2E; text-transform: uppercase; letter-spacing: 2px;">SYS_LOG // NOVO CONTACTO</span>
              <h2 style="font-size: 20px; margin: 8px 0 0 0; color: #FFFFFF;">Mensagem recebida pelo portfólio</h2>
            </div>
            <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #94A3B8;">Nome:</strong> ${escapeHtml(name)}</p>
            <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #94A3B8;">Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #FF4D2E; text-decoration: none;">${escapeHtml(email)}</a></p>
            <div style="margin-top: 20px; background: #12151B; border: 1px solid #232936; padding: 16px;">
              <strong style="color: #94A3B8; font-size: 12px; font-family: monospace; text-transform: uppercase;">Mensagem:</strong>
              <p style="margin: 8px 0 0 0; font-size: 14px; line-height: 1.6; color: #F4F5F7;">
                ${escapeHtml(message).replace(/\n/g, '<br/>')}
              </p>
            </div>
            <div style="margin-top: 24px; font-family: monospace; font-size: 11px; color: #64748B; border-top: 1px solid #232936; padding-top: 12px;">
              Adilson dos Santos Jacinto · Desenvolvedor Full-Stack · Luanda, AO
            </div>
          </div>
        `,
      }),
    })

    // 2. Enviar resposta automática ao remetente confirmando a receção
    const autoReplyPromise = fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email],
        reply_to: TO_EMAIL,
        subject: `Recebi a tua mensagem — Adilson Jacinto`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #F8F9FA; color: #18181B; border: 1px solid #E2E2E6; padding: 32px;">
            <div style="border-bottom: 2px solid #FF4D2E; padding-bottom: 16px; margin-bottom: 24px;">
              <span style="font-family: monospace; font-size: 11px; color: #FF4D2E; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">CONFIRMAÇÃO DE RECEÇÃO</span>
              <h2 style="font-size: 22px; margin: 8px 0 0 0; color: #18181B;">Olá, ${escapeHtml(name)}!</h2>
            </div>
            <p style="font-size: 15px; line-height: 1.6; color: #3F3F46;">
              Obrigado por entrares em contacto através do meu portfólio. A tua mensagem foi registada e já está na minha caixa de entrada.
            </p>
            <p style="font-size: 15px; line-height: 1.6; color: #3F3F46;">
              Irei analisar os detalhes do teu projeto ou pedido e responder-te diretamente o mais breve possível (normalmente em menos de 4 horas).
            </p>
            
            <div style="margin: 24px 0; background: #FFFFFF; border: 1px solid #E2E2E6; padding: 18px;">
              <p style="margin: 0 0 8px 0; font-family: monospace; font-size: 11px; color: #71717A; text-transform: uppercase; letter-spacing: 1px;">Resumo da mensagem enviada:</p>
              <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #52525B; font-style: italic;">
                "${escapeHtml(message).replace(/\n/g, '<br/>')}"
              </p>
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #3F3F46;">
              Se precisares de uma resposta urgente, podes também falar comigo via <a href="https://wa.me/244900000000" style="color: #FF4D2E; font-weight: 600; text-decoration: none;">WhatsApp</a>.
            </p>

            <div style="margin-top: 32px; border-top: 1px solid #E2E2E6; padding-top: 18px; font-family: monospace; font-size: 12px; color: #71717A;">
              <strong style="color: #18181B;">Adilson dos Santos Jacinto</strong><br/>
              Desenvolvedor Full-Stack · Sistemas de Gestão & Arquitetura Web<br/>
              <a href="https://adijacinto.tech" style="color: #FF4D2E; text-decoration: none;">adijacinto.tech</a> · Luanda, Angola
            </div>
          </div>
        `,
      }),
    })

    const [adminRes] = await Promise.all([adminNotificationPromise, autoReplyPromise])

    if (!adminRes.ok) {
      const errData = await adminRes.json().catch(() => ({}))
      console.error('Resend error:', errData)
      return res.status(502).json({ error: 'Falha ao enviar o e-mail através da Resend.' })
    }

    return res.status(200).json({ ok: true, message: 'Mensagem enviada e resposta automática transmitida.' })
  } catch (err) {
    console.error('Send error:', err)
    return res.status(500).json({ error: 'Erro inesperado ao enviar a mensagem.' })
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

