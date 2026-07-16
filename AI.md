# AI.md — Congreso La Llave de David 2026

Landing page for a Christian event at Iglesia CFB, built with React + Vite + Tailwind CSS v4.

## Event Info

- **Name**: Congreso La Llave de David 2026
- **Dates**: Viernes 28 Agosto 7–9:30 PM + Sábado 29 Agosto 4:30–8 PM
- **Theme**: "No temas, pequeño rebaño" (Lucas 12:32 LBLA)
- **Location**: Iglesia CFB — 7a Calle 9-80, Ciudad San Cristóbal, Zona 8, Mixco
- **WhatsApp**: +502 3152 0285
- **Repo**: https://github.com/pantallascfb-hash/congresocfb.git

## Tech Stack

- React 19 + React Router v7
- Vite 8
- Tailwind CSS v4 (with `@theme` block, `@utility`, `@layer components`)
- DaisyUI 5
- Lucide React icons
- React Icons (FaFacebook, FaYoutube, FaInstagram, FaWhatsapp)
- GSAP (floating particles)
- react-scroll (scroll-to-top)

## Design System

- **Theme**: Editorial Luxury — warm cream background, high contrast navy text
- **Palette**: Navy (#0B2F6A), Blue mid (#1E5DB8), Gold (#B8892E), Gold light (#D4A84A), Cream (#FDFBF7)
- **Fonts**: Playfair Display (headings), DM Sans (body). Base 18px.
- **Components**: `.double-bezel` (card with outer/inner border), `.glass-nav` (frosted pill nav), `.btn-primary` (gold gradient), `.btn-secondary` (navy outline), `.eyebrow` (pill badge), `.text-body`
- **Animations**: fade-in-up/left/right, scale-in, float. Respects `prefers-reduced-motion`.
- **Accessibility**: `focus-ring` utility on all interactive elements, min 48px tap targets, WCAG AA contrast

## Site Structure

| Section | Component | Description |
|---|---|---|
| Hero | `Banner/Banner.jsx` | Title, key illustration, sheep image, Reservar + Cómo llegar CTAs |
| Tema | `Tema/Tema.jsx` | "No temas, pequeño rebaño" + Lucas 12:32 |
| Agenda | `Agenda/Agenda.jsx` | Two double-bezel cards (Viernes/Sábado) |
| Destacada | `Destacada/Destacada.jsx` | Panoramic sheep image with dark overlay banner |
| Ubicación | `Ubicacion/Ubicacion.jsx` | Google Maps embed + info card with Waze link |
| Registro | `Registro/Registro.jsx` | "QUIERO ASISTIR" CTA → WhatsApp |
| Footer | `Footer/Footer.jsx` | Dark navy footer with logo, event info, social links |

## File Map

```
src/
  main.jsx                     — Entry point
  index.css                    — Theme, fonts, utilities, animations
  Routes/Routes.jsx            — Single route → Home
  Layout/MainLayout/Main.jsx   — Root layout, noise overlay, scroll-to-top
  Components/
    AnimatedBackground.jsx     — GSAP particles, mouse trail, ambient glows
    Header/Navbar.jsx          — Floating glass pill nav, mobile menu
    Footer/Footer.jsx          — Dark navy footer
  Pages/
    Home/Home.jsx              — Section composition
    Home/Banner/Banner.jsx     — Hero
    Tema/Tema.jsx
    Agenda/Agenda.jsx
    Destacada/Destacada.jsx
    Ubicacion/Ubicacion.jsx
    Registro/Registro.jsx
public/
  logo-cfb.png                 — Church logo
  favicon.png                  — Favicon
  favicon.ico
index.html                     — Meta tags, LocalWork AI chatbot script
```

## External Links

| Link | URL |
|---|---|
| WhatsApp (register) | `https://api.whatsapp.com/send?phone=50231520285&text=Hola%2C%20quiero%20asistir%20al%20Congreso%20la%20Llave%20de%20David` |
| Waze (directions) | `https://www.waze.com/es-419/live-map/directions/iglesia-cfb-7a-calle-9-80-ciudad-san-cristobal,-zona-8,-mixco?to=place.w.176554130.1765606836.4170674` |
| Google Maps embed | Place ID `0x7e5fdedd5b13e74f` (Comunidades de Formación Bíblica) |
| Facebook | `https://www.facebook.com/comunidadesdeformacionbiblicacentral/` |
| YouTube | `http://youtube.com/@iglesiacfbcentral` |
| Instagram | `https://www.instagram.com/iglesiacfb/` |

## Completed

- [x] Full light cream theme (all components rewritten from dark)
- [x] Hero with key illustration, sheep image, dual CTA (Reservar + Cómo llegar)
- [x] Tema section with verse
- [x] Agenda section with two day cards
- [x] Destacada panoramic banner
- [x] Ubicación with map + Waze link (no QR)
- [x] Registro CTA → WhatsApp
- [x] Footer (dark navy contrast section)
- [x] Floating nav with mobile menu
- [x] Scroll-to-top button
- [x] Animated background (particles, mouse trail)
- [x] `prefers-reduced-motion` support
- [x] `focus-ring` accessibility utility
- [x] LocalWork AI chatbot in index.html
- [x] Build passes, pushed to GitHub

## Notes

- Old Nuxcrew portfolio pages exist in `src/Pages/` (About, Skills, Projects, Contact, etc.) but are **not routed** — only Home is active
- Global `h1-h6` uses `color: inherit` (not hardcoded navy) so Tailwind classes like `text-white` work in the footer
- The `Destacada` section intentionally uses a dark navy overlay with white text for contrast
- `focus-ring` is defined as a `@utility` (not a plain CSS class) for Tailwind v4 `@apply` compatibility
