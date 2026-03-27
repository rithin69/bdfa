export async function submitWebsiteForm(formElement, options = {}) {
  const token = process.env.REACT_APP_CLICKUP_API_TOKEN
  const listId = process.env.REACT_APP_CLICKUP_LIST_ID

  if (!token || !listId) {
    throw new Error('Missing ClickUp configuration')
  }

  const formData = new FormData(formElement)
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const message = formData.get('message') || formData.get('enquiry')
  const products = options.products || []
  const source = options.source || 'Website'

  const productList = Array.isArray(products) && products.length > 0
    ? products.join(', ')
    : 'Not specified'

  const response = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `Lead: ${name} — ${email}`,
      description:
        `Source: ${source}\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'Not provided'}\n` +
        `Interested in: ${productList}\n` +
        `Message:\n${message || 'No message provided'}`,
      priority: 3,
      notify_all: false,
    }),
  })

  if (!response.ok) {
    throw new Error('Submission failed')
  }
}
