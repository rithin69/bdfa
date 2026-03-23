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

  return payload
}
