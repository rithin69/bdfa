const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export async function submitWebsiteForm(formElement, options = {}) {
  const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error('Missing REACT_APP_WEB3FORMS_ACCESS_KEY')
  }

  const formData = new FormData(formElement)
  formData.append('access_key', accessKey)
  formData.append('from_name', 'BDF Architectural')
  formData.append('replyto', formData.get('email') || 'info@bdfa.uk')
  formData.append('to_email', 'info@bdfa.uk')

  if (options.subject) formData.append('subject', options.subject)

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    body: formData,
  })

  const payload = await response.json()

  if (!response.ok || payload.success === false) {
    throw new Error(payload.message || 'Form submission failed')
  }

  // Fire-and-forget: send lead to ClickUp (don't block or fail the form on error)
  sendToClickUp({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    products: options.products || [],
    message: formData.get('message') || formData.get('enquiry'),
    source: options.source || 'Website',
  }).catch(() => {})

  return payload
}

async function sendToClickUp(data) {
  const token = process.env.REACT_APP_CLICKUP_API_TOKEN
  const listId = process.env.REACT_APP_CLICKUP_LIST_ID

  if (!token || !listId) return

  const { name, email, phone, products, message, source } = data

  const productList = Array.isArray(products) && products.length > 0
    ? products.join(', ')
    : 'Not specified'

  await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `Lead: ${name} — ${email}`,
      description:
        `Source: ${source || 'Website'}\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'Not provided'}\n` +
        `Interested in: ${productList}\n` +
        `Message:\n${message || 'No message provided'}`,
      status: 'Open',
      priority: 3,
      notify_all: false,
    }),
  })
}
