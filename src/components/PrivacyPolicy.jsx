import React from 'react'
import { Helmet } from 'react-helmet-async'
import useResponsive from '../hooks/useResponsive'

const sections = [
  {
    title: 'Who We Are',
    body: `BDF Architectural is a supplier and installer of premium aluminium bifold doors, sliding doors, windows, skylights, and related glazing products. Our registered address is Bingley, The Common, West Drayton, Middlesex, UB7 7HQ. You can contact us at info@bdfa.uk or by calling 01895 439 199.`,
  },
  {
    title: 'What Information We Collect',
    body: `When you use our website or contact us, we may collect the following personal information:\n\n• Name\n• Email address\n• Phone number\n• Details of your enquiry or project\n• IP address and browser information (collected automatically via analytics)\n\nWe only collect information that is necessary to respond to your enquiry or provide our services.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information you provide to:\n\n• Respond to your enquiry and provide quotes\n• Arrange site surveys and installations\n• Send follow-up communications related to your project\n• Improve our website and services\n\nWe do not use your personal information for unsolicited marketing without your consent.`,
  },
  {
    title: 'How We Store Your Information',
    body: `Your enquiry details are securely stored in our CRM system. We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. We retain customer data for as long as is necessary to fulfil the purposes outlined in this policy or as required by law.`,
  },
  {
    title: 'Sharing Your Information',
    body: `We do not sell, rent, or trade your personal information to third parties. We may share your information with:\n\n• Trusted subcontractors involved in your installation (where necessary)\n• Our CRM and business tools providers, who process data on our behalf under data processing agreements\n\nAll third parties we work with are required to handle your data securely and in accordance with applicable data protection law.`,
  },
  {
    title: 'Cookies & Analytics',
    body: `Our website uses Google Analytics to understand how visitors use our site. This collects anonymised data such as pages visited, time on site, and general location. This data does not personally identify you.\n\nWe also use Google Tag Manager to manage tracking scripts. No personally identifiable information is collected through these tools without your knowledge.\n\nYou can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.`,
  },
  {
    title: 'Your Rights',
    body: `Under UK GDPR, you have the right to:\n\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data (the "right to be forgotten")\n• Object to or restrict how we process your data\n• Withdraw consent at any time where processing is based on consent\n\nTo exercise any of these rights, please contact us at info@bdfa.uk. We will respond within 30 days.`,
  },
  {
    title: 'Third-Party Links',
    body: `Our website may contain links to third-party websites (such as Trustpilot or manufacturer websites). We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. The latest version will always be available on this page. We recommend checking back periodically if you have concerns about how your data is used.`,
  },
  {
    title: 'Contact Us',
    body: `If you have any questions about this Privacy Policy or how we handle your personal data, please contact:\n\nBDF Architectural\nBingley, The Common\nWest Drayton, Middlesex, UB7 7HQ\n\nEmail: info@bdfa.uk\nPhone: 01895 439 199`,
  },
]

export default function PrivacyPolicy() {
  const { isMobile } = useResponsive()

  return (
    <div style={{ background: '#F7F4F0', minHeight: '100vh' }}>
      <Helmet>
        <title>Privacy Policy | BDF Architectural</title>
        <meta name="description" content="BDF Architectural's privacy policy. How we collect, use, and protect your personal data in accordance with UK GDPR." />
        <link rel="canonical" href="https://www.bdfa.uk/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Hero */}
      <div style={{ background: '#1C2B2B', padding: isMobile ? '100px 20px 48px' : '120px 64px 64px' }}>
        <p style={{ color: '#0ABAB5', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 14px', fontFamily: 'ErasMedium, sans-serif' }}>
          Legal
        </p>
        <h1 style={{ color: '#F7F4F0', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600, margin: '0 0 12px', lineHeight: 1.15 }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'rgba(247,244,240,0.5)', fontSize: '13px', margin: 0, fontFamily: 'ErasMedium, sans-serif' }}>
          Last updated: March 2026
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: isMobile ? '48px 20px 80px' : '64px 40px 100px' }}>

        <p style={{ color: '#444', fontSize: '15px', lineHeight: 1.85, margin: '0 0 48px', borderLeft: '3px solid #0ABAB5', paddingLeft: '20px' }}>
          At BDF Architectural, we are committed to protecting your privacy. This policy explains what personal information we collect, how we use it, and your rights under UK data protection law (UK GDPR).
        </p>

        {sections.map((section, i) => (
          <div key={i} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: i < sections.length - 1 ? '1px solid rgba(10,186,181,0.15)' : 'none' }}>
            <h2 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 600, margin: '0 0 16px' }}>
              {section.title}
            </h2>
            {section.body.split('\n').map((line, j) => (
              line.trim() === ''
                ? <br key={j} />
                : line.startsWith('•')
                  ? (
                    <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <span style={{ color: '#0ABAB5', marginTop: '6px', flexShrink: 0, fontSize: '10px' }}>●</span>
                      <span style={{ color: '#444', fontSize: '14px', lineHeight: 1.8 }}>{line.replace('•', '').trim()}</span>
                    </div>
                  )
                  : <p key={j} style={{ color: '#444', fontSize: '14px', lineHeight: 1.85, margin: '0 0 10px' }}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
