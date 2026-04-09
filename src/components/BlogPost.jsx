import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import useResponsive from '../hooks/useResponsive'

function renderContent(blocks) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case 'intro':
        return (
          <p key={i} style={{ color: '#1C2B2B', fontSize: '17px', lineHeight: 1.9, margin: '0 0 32px', fontWeight: 400 }}>
            {block.text}
          </p>
        )
      case 'heading':
        return (
          <h2 key={i} style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 600, margin: '40px 0 16px', lineHeight: 1.3 }}>
            {block.text}
          </h2>
        )
      case 'text':
        return (
          <p key={i} style={{ color: '#333', fontSize: '15px', lineHeight: 1.85, margin: '0 0 24px' }}>
            {block.text}
          </p>
        )
      case 'list':
        return (
          <ul key={i} style={{ listStyle: 'none', padding: 0, margin: '0 0 28px' }}>
            {block.items.map((item, j) => (
              <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '10px' }}>
                <span style={{ marginTop: '5px', flexShrink: 0, width: '8px', height: '8px', borderRadius: '50%', background: '#0ABAB5' }} />
                <span style={{ color: '#333', fontSize: '15px', lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        )
      case 'cta':
        return (
          <div key={i} style={{
            marginTop: '48px', padding: '32px', background: 'rgba(10,186,181,0.08)',
            border: '1px solid rgba(10,186,181,0.3)', borderRadius: '12px'
          }}>
            <p style={{ color: '#1C2B2B', fontSize: '15px', lineHeight: 1.8, margin: '0 0 20px', fontWeight: 500 }}>
              {block.text}
            </p>
            <Link
              to="/contact"
              style={{
                display: 'inline-block', background: '#0ABAB5', color: '#1C2B2B',
                padding: '14px 32px', fontSize: '10px', letterSpacing: '2.5px', fontWeight: 700,
                textTransform: 'uppercase', textDecoration: 'none',
              }}
            >
              Get a Free Quote
            </Link>
          </div>
        )
      default:
        return null
    }
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { isMobile } = useResponsive()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', background: '#F7F4F0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
        <h1 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 600, margin: 0 }}>Article Not Found</h1>
        <Link to="/blog" style={{ background: '#0ABAB5', padding: '14px 32px', color: '#1C2B2B', fontSize: '11px', letterSpacing: '2.5px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
          Back to Blog
        </Link>
      </div>
    )
  }

  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3)
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div style={{ background: '#F7F4F0', minHeight: '100vh' }}>
      <Helmet>
        <title>{post.title} | BDF Architectural</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://www.bdfa.uk/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.bdfa.uk/blog/${slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={`https://www.bdfa.uk${post.heroImage}`} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={`https://www.bdfa.uk${post.heroImage}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.metaDescription,
          "image": `https://www.bdfa.uk${post.heroImage}`,
          "datePublished": post.publishDate,
          "dateModified": post.publishDate,
          "author": { "@type": "Organization", "name": "BDF Architectural", "url": "https://www.bdfa.uk" },
          "publisher": {
            "@type": "Organization",
            "name": "BDF Architectural",
            "logo": { "@type": "ImageObject", "url": "https://www.bdfa.uk/logo.png" }
          },
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.bdfa.uk/blog/${slug}` }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bdfa.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.bdfa.uk/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.bdfa.uk/blog/${slug}` }
          ]
        })}</script>
      </Helmet>

      {/* Hero */}
      <div style={{ position: 'relative', height: isMobile ? '300px' : '420px', overflow: 'hidden' }}>
        <img
          src={post.heroImage}
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28,43,43,0.6) 0%, rgba(28,43,43,0.75) 100%)' }} />
        <div style={{ position: 'absolute', bottom: isMobile ? '24px' : '48px', left: isMobile ? '20px' : '64px', right: isMobile ? '20px' : '64px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'rgba(247,244,240,0.8)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(247,244,240,0.4)' }}>›</span>
            <Link to="/blog" style={{ color: 'rgba(247,244,240,0.8)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(247,244,240,0.4)' }}>›</span>
            <span style={{ color: '#0ABAB5' }}>{post.category}</span>
          </nav>
          <h1 style={{ color: '#F7F4F0', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3.5vw, 48px)', fontWeight: 600, margin: 0, lineHeight: 1.2, maxWidth: '800px' }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '40px 16px 80px' : '64px 64px 100px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 300px', gap: '64px', alignItems: 'start' }}>

        {/* Main content */}
        <article>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid rgba(10,186,181,0.2)', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(10,186,181,0.1)', color: '#0ABAB5', fontSize: '9px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '6px 12px', borderRadius: '4px' }}>
              {post.category}
            </span>
            <span style={{ color: '#888', fontSize: '12px' }}>Published {formattedDate}</span>
            <span style={{ color: '#888', fontSize: '12px' }}>By BDF Architectural</span>
          </div>

          <div>
            {renderContent(post.content)}
          </div>

          {/* Related Products */}
          {post.relatedProducts && post.relatedProducts.length > 0 && (
            <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(10,186,181,0.2)' }}>
              <h2 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 600, margin: '0 0 20px' }}>
                Related Products
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
                {post.relatedProducts.map(prod => (
                  <Link
                    key={prod.slug}
                    to={`/products/${prod.slug}`}
                    style={{
                      textDecoration: 'none', background: '#fff', border: '1px solid rgba(10,186,181,0.2)',
                      borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center',
                      gap: '10px', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#0ABAB5'; e.currentTarget.style.background = 'rgba(10,186,181,0.04)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(10,186,181,0.2)'; e.currentTarget.style.background = '#fff' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M1 7H13M7 1L13 7L7 13" stroke="#0ABAB5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ color: '#1C2B2B', fontSize: '12px', fontWeight: 600, lineHeight: 1.4 }}>{prod.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside style={{ position: isMobile ? 'static' : 'sticky', top: '100px' }}>

          {/* CTA box */}
          <div style={{ background: '#1C2B2B', borderRadius: '12px', padding: '28px', marginBottom: '32px' }}>
            <h3 style={{ color: '#F7F4F0', fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 600, margin: '0 0 12px' }}>
              Get a Free Quote
            </h3>
            <p style={{ color: 'rgba(247,244,240,0.7)', fontSize: '13px', lineHeight: 1.7, margin: '0 0 20px' }}>
              Speak to our experts and get a no-obligation quote for your project anywhere in the UK.
            </p>
            <Link
              to="/contact"
              style={{ display: 'block', background: '#0ABAB5', color: '#1C2B2B', padding: '13px 20px', fontSize: '10px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center' }}
            >
              Contact Us
            </Link>
            <a
              href="tel:01895439199"
              style={{ display: 'block', marginTop: '10px', color: '#0ABAB5', fontSize: '13px', textAlign: 'center', textDecoration: 'none', fontWeight: 600 }}
            >
              01895 439 199
            </a>
          </div>

          {/* Related posts */}
          {otherPosts.length > 0 && (
            <div>
              <h3 style={{ color: '#1C2B2B', fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 600, margin: '0 0 16px' }}>
                More Articles
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {otherPosts.map(p => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} style={{ textDecoration: 'none', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      loading="lazy"
                      style={{ width: '64px', height: '48px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0 }}
                    />
                    <span style={{ color: '#1C2B2B', fontSize: '13px', lineHeight: 1.5, fontWeight: 500 }}>
                      {p.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
