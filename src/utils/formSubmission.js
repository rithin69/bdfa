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

  const productList = Array.isArray(products) && products.length > 0
    ? products.join(', ')
    : 'Not specified'

  const description =
    `Interested In: ${productList}\n\n` +
    `Message:\n${message || 'No message provided'}`

  const response = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      priority: 1,
      notify_all: false,
      custom_item_id: 1002,
      custom_fields: [
        { id: '0b4adf28-1f6b-4309-8221-c42719da095c', value: name },
        { id: '34a8a687-12ab-4965-a4ac-4a8e30ef8acb', value: email },
        { id: '022b0271-c06c-4456-96ca-a0e2031641dd', value: phone || '' },
        { id: 'ac28730c-7580-4627-92b1-2dd897d98ab6', value: '1b749803-1034-4e53-bfe7-fa859c1aeb8b' },
      ],
    }),
  })

  if (!response.ok) {
    throw new Error('Submission failed')
  }
}
