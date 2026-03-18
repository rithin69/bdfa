# BDF Architectural Website

Luxury architecture & interiors website built with React + Tailwind CSS.

## Tech Stack
- React 18
- Tailwind CSS 3
- Google Fonts (Cormorant Garamond + Montserrat)

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Start development server
npm start

# 4. Build for production
npm run build
```

## Project Structure

```
src/
├── App.jsx                  # Root component
├── index.css                # Tailwind + custom animations + Google Fonts
└── components/
    ├── Navbar.jsx            # Fixed nav with scroll effect + mobile menu
    ├── Hero.jsx              # Full-screen hero with arch sketch
    ├── Stats.jsx             # 4-stat bar
    ├── Services.jsx          # 6 service cards grid
    ├── Portfolio.jsx         # 5-project portfolio grid
    ├── WhyUs.jsx             # Why BDF section with sketch visual
    └── Process.jsx           # Process steps + CTA banner + Footer
```

## Colour Palette

| Name       | Hex       | Usage                        |
|------------|-----------|------------------------------|
| Gold       | #C9A84C   | Accents, highlights, CTA bg  |
| Gold Light | #E8D5A3   | Hover states                 |
| BDF Black  | #080808   | Main background              |
| BDF Dark   | #0F0F0F   | Section backgrounds          |
| BDF Dark2  | #161616   | Card backgrounds             |
| BDF White  | #F5F0E8   | Primary text                 |

## Fonts

- **Cormorant Garamond** — Display/headings (luxury serif)
- **Montserrat** — Body/UI (clean sans-serif at multiple weights)

## Customisation

1. Update company info in each component
2. Replace SVG illustrations with real project photos
3. Add real contact form (EmailJS / Formspree)
4. Connect portfolio to a CMS (Contentful / Sanity)
