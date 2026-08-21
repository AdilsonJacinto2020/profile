// Vercel Serverless Function — POST /api/send
// Recebe os dados do formulário de contacto e envia um e-mail via Resend.
// A chave da API nunca é exposta ao browser: fica apenas em RESEND_API_KEY (variável de ambiente).

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
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL // ex: adilson@adijacinto.tech
  const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Portfólio <onboarding@resend.dev>'

  if (!RESEND_API_KEY || !TO_EMAIL) {
    return res.status(500).json({ error: 'Servidor de e-mail não configurado.' })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Novo contacto do portfólio — ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>Nova mensagem do portfólio</h2>
            <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}))
      console.error('Resend error:', errData)
      return res.status(502).json({ error: 'Falha ao enviar o e-mail. Tenta novamente.' })
    }

    return res.status(200).json({ ok: true })
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
