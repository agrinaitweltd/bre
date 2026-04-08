import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const BUSINESS_EMAIL = 'contactus@breezyeemoves.co.uk'
const FROM_ADDRESS = 'Breezyee Moves <no-reply@breezyeemoves.co.uk>'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    service,
    propertySize,
    currentAddress,
    newAddress,
    moveDate,
    instructions,
    inventory,
  } = req.body as {
    firstName: string
    lastName: string
    email: string
    phone?: string
    service?: string
    propertySize?: string
    currentAddress?: string
    newAddress?: string
    moveDate?: string
    instructions?: string
    inventory?: Record<string, number>
  }

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Build inventory lines for business email
  const inventoryLines =
    inventory && Object.keys(inventory).length > 0
      ? Object.entries(inventory)
          .filter(([, qty]) => qty > 0)
          .map(([key, qty]) => {
            const [room, item] = key.split('::')
            return `  ${room} — ${item} x${qty}`
          })
          .join('\n')
      : null

  const businessEmailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><style>
  body { font-family: Arial, sans-serif; color: #1a1a1a; background: #f4f4f4; margin: 0; padding: 0; }
  .wrapper { max-width: 620px; margin: 40px auto; background: #fff; border-radius: 8px; overflow: hidden; }
  .header { background: #0a0a0a; padding: 28px 32px; }
  .header h1 { color: #fff; font-size: 20px; margin: 0; letter-spacing: -0.3px; }
  .header span { color: #e8b34b; }
  .body { padding: 32px; }
  .row { margin-bottom: 16px; }
  .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; color: #888; margin-bottom: 4px; }
  .value { font-size: 15px; color: #1a1a1a; font-weight: 500; }
  .divider { border: none; border-top: 1px solid #eee; margin: 24px 0; }
  .inventory { background: #f9f9f9; border-radius: 6px; padding: 16px; font-size: 14px; white-space: pre-line; color: #333; }
  .footer { background: #f9f9f9; padding: 16px 32px; font-size: 12px; color: #999; }
</style></head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Quote Request — <span>Breezyee Moves</span></h1>
    </div>
    <div class="body">
      <div class="row"><div class="label">Name</div><div class="value">${firstName} ${lastName}</div></div>
      <div class="row"><div class="label">Email</div><div class="value">${email}</div></div>
      ${phone ? `<div class="row"><div class="label">Phone</div><div class="value">${phone}</div></div>` : ''}
      <hr class="divider" />
      ${service ? `<div class="row"><div class="label">Service Required</div><div class="value">${service}</div></div>` : ''}
      ${propertySize ? `<div class="row"><div class="label">Property Size</div><div class="value">${propertySize}</div></div>` : ''}
      ${currentAddress ? `<div class="row"><div class="label">Current Address</div><div class="value">${currentAddress}</div></div>` : ''}
      ${newAddress ? `<div class="row"><div class="label">New Address</div><div class="value">${newAddress}</div></div>` : ''}
      ${moveDate ? `<div class="row"><div class="label">Move Date</div><div class="value">${moveDate}</div></div>` : ''}
      ${instructions ? `<hr class="divider" /><div class="row"><div class="label">Special Instructions</div><div class="value">${instructions}</div></div>` : ''}
      ${inventoryLines ? `<hr class="divider" /><div class="row"><div class="label">Item Inventory</div><div class="inventory">${inventoryLines}</div></div>` : ''}
    </div>
    <div class="footer">This request was submitted via breezyeemoves.co.uk</div>
  </div>
</body>
</html>`

  const confirmationEmailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><style>
  body { font-family: Arial, sans-serif; color: #1a1a1a; background: #f4f4f4; margin: 0; padding: 0; }
  .wrapper { max-width: 580px; margin: 40px auto; background: #fff; border-radius: 8px; overflow: hidden; }
  .header { background: #0a0a0a; padding: 32px; text-align: center; }
  .header h1 { color: #fff; font-size: 22px; margin: 0 0 4px; }
  .header p { color: #e8b34b; font-size: 13px; margin: 0; letter-spacing: 0.5px; }
  .body { padding: 40px 32px 32px; }
  .body h2 { font-size: 20px; color: #0a0a0a; margin: 0 0 16px; }
  .body p { font-size: 15px; color: #444; line-height: 1.7; margin: 0 0 16px; }
  .highlight { background: #f0f9f0; border-left: 4px solid #22c55e; padding: 14px 18px; border-radius: 0 6px 6px 0; margin: 24px 0; font-size: 15px; color: #166534; font-weight: 600; }
  .details { background: #f9f9f9; border-radius: 6px; padding: 18px; margin: 24px 0; }
  .details p { font-size: 14px; color: #555; margin: 4px 0; }
  .footer { background: #f4f4f4; padding: 20px 32px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; }
  .footer a { color: #e8b34b; text-decoration: none; }
</style></head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Breezyee Moves</h1>
      <p>Your trusted removal specialists</p>
    </div>
    <div class="body">
      <h2>Thank you, ${firstName}!</h2>
      <p>We've received your removal request and our team is already reviewing the details.</p>
      <div class="highlight">We will get back to you within 2 hours with your personalised quote.</div>
      <p>In the meantime, if you have any urgent questions, please don't hesitate to contact us directly:</p>
      <div class="details">
        <p><strong>Phone:</strong> +44 07398 395022</p>
        <p><strong>Email:</strong> contactus@breezyeemoves.co.uk</p>
        <p><strong>Hours:</strong> Mon–Sat, 7am–8pm</p>
      </div>
      <p>We look forward to making your move as smooth and stress-free as possible.</p>
      <p>Warm regards,<br /><strong>The Breezyee Moves Team</strong></p>
    </div>
    <div class="footer">
      © 2026 Breezyee Moves · <a href="https://breezyeemoves.co.uk">breezyeemoves.co.uk</a>
    </div>
  </div>
</body>
</html>`

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: BUSINESS_EMAIL,
        subject: `New Quote Request from ${firstName} ${lastName}`,
        html: businessEmailHtml,
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: 'We\'ve received your request — Breezyee Moves',
        html: confirmationEmailHtml,
      }),
    ])

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
