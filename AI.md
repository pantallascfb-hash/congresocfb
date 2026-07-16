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
- **SheetDB** (form backend — Google Sheets as database)

## Design System

- **Theme**: Editorial Luxury — warm cream background, high contrast navy text
- **Palette**: Navy (#0B2F6A), Blue mid (#1E5DB8), Gold (#B8892E), Gold light (#D4A84A), Cream (#FDFBF7)
- **Fonts**: Playfair Display (headings), DM Sans (body). Base 18px.
- **Components**: `.double-bezel` (card with outer/inner border), `.glass-nav` (frosted pill nav), `.btn-primary` (gold gradient), `.btn-secondary` (navy outline), `.eyebrow` (pill badge), `.text-body`
- **Animations**: fade-in, fade-in-up/left/right, scale-in, float. Respects `prefers-reduced-motion`.
- **Accessibility**: `focus-ring` utility on all interactive elements, min 48px tap targets, WCAG AA contrast, `aria-modal`/`aria-label` on modal

## Site Structure

| Section | Component | Description |
|---|---|---|
| Hero | `Banner/Banner.jsx` | Title, key illustration, sheep image, **Reservar** (opens modal) + Cómo llegar CTAs |
| Tema | `Tema/Tema.jsx` | "No temas, pequeño rebaño" + Lucas 12:32 |
| Agenda | `Agenda/Agenda.jsx` | Two double-bezel cards (Viernes/Sábado) |
| Destacada | `Destacada/Destacada.jsx` | Panoramic sheep image with dark overlay banner |
| Ubicación | `Ubicacion/Ubicacion.jsx` | Google Maps embed + info card with Waze link |
| Registro | `Registro/Registro.jsx` | "QUIERO ASISTIR" CTA → **opens modal** |
| Footer | `Footer/Footer.jsx` | Dark navy footer with logo, event info, **visible social links** |
| Modal | `RegisterModal/RegisterModal.jsx` | Registration form → SheetDB |

## File Map

```
src/
  main.jsx                     — Entry point
  index.css                    — Theme, fonts, utilities, animations
  Routes/Routes.jsx            — Single route → Home
  Layout/MainLayout/Main.jsx   — Root layout, noise overlay, scroll-to-top
  Components/
    AnimatedBackground.jsx     — Gold/navy particles, ambient glows
    Header/Navbar.jsx          — Floating glass pill nav, mobile menu
    Footer/Footer.jsx          — Dark navy footer
    RegisterModal/RegisterModal.jsx — Registration form modal (SheetDB)
  Pages/
    Home/Home.jsx              — Section composition + modal state
    Home/Banner/Banner.jsx     — Hero (Reservar opens modal)
    Tema/Tema.jsx
    Agenda/Agenda.jsx
    Destacada/Destacada.jsx
    Ubicacion/Ubicacion.jsx
    Registro/Registro.jsx      — QUIERO ASISTIR opens modal
public/
  logo-cfb.png                 — Church logo
  favicon.png                  — Favicon
  favicon.ico
index.html                     — Meta tags, LocalWork AI chatbot script
```

## Registration Form (SheetDB)

- **Endpoint**: `https://sheetdb.io/api/v1/iz1amb4364h0k`
- **Sheet columns**: `Nombre | Correo | Telefono | Mensaje | Fecha`
- **Fields** (all required, Spanish):
  - Nombre completo (text)
  - Correo electrónico (email, validated format)
  - Teléfono (+502 UI prefix, saves only 8 digits as string to avoid `#ERROR!`)
  - Mensaje o duda (textarea)
- **Validation**: client-side, per-field red borders + error text on submit/blur, blocks API call if invalid
- **Triggers**: "Reservar mi Lugar" (hero) + "QUIERO ASISTIR" (registro section)
- **Success**: green checkmark + auto-close after 2.5s
- **Modal**: escape to close, backdrop click, focus on open, body scroll lock

## External Links

| Link | URL |
|---|---|
| SheetDB API | `https://sheetdb.io/api/v1/iz1amb4364h0k` |
| WhatsApp (register) | `https://api.whatsapp.com/send?phone=50231520285&text=Hola%2C%20quiero%20asistir%20al%20Congreso%20la%20Llave%20de%20David` |
| Waze (directions) | `https://www.waze.com/es-419/live-map/directions/iglesia-cfb-7a-calle-9-80-ciudad-san-cristobal,-zona-8,-mixco?to=place.w.176554130.1765606836.4170674` |
| Google Maps embed | Place ID `0x7e5fdedd5b13e74f` (Comunidades de Formación Bíblica) |
| Facebook | `https://www.facebook.com/comunidadesdeformacionbiblicacentral/` |
| YouTube | `http://youtube.com/@iglesiacfbcentral` |
| Instagram | `https://www.instagram.com/iglesiacfb/` |

## Completed

- [x] Full light cream theme (all components rewritten from dark)
- [x] Hero with key illustration, sheep image, dual CTA
- [x] Tema section with verse
- [x] Agenda section with two day cards
- [x] Destacada panoramic banner
- [x] Ubicación with map + Waze link
- [x] Footer (dark navy contrast section)
- [x] Floating nav with mobile menu
- [x] Scroll-to-top button
- [x] Animated background (particles, ambient glows)
- [x] `prefers-reduced-motion` support
- [x] `focus-ring` accessibility utility
- [x] LocalWork AI chatbot in index.html
- [x] Taste-skill editorial luxury pass (all sections responsive)
- [x] **Registration modal form → SheetDB** (Nombre, Correo, Teléfono +502, Mensaje)
- [x] Form validation (per-field errors, blocks empty submit)
- [x] Phone saved as 8-digit string (no + to avoid Sheets formula error)
- [x] Footer social icons visibility fixed (boosted opacity/size/border)
- [x] Build passes, pushed to GitHub

## Notes

- Old Nuxcrew portfolio pages exist in `src/Pages/` (About, Skills, Projects, Contact, etc.) but are **not routed** — only Home is active
- The `Destacada` section intentionally uses a dark navy overlay with white text for contrast
- `focus-ring` is defined as a `@utility` (not a plain CSS class) for Tailwind v4 `@apply` compatibility
- `AnimatedBackground` uses only particles + ambient glows — z-9999 mouse trail was removed
- Navbar has solid cream bg (`0.97` opacity) on mobile for contrast against content
- Mobile date badge moved to inline hero text (floating cards clip on mobile)
- `section-padding`: `py-16 md:py-24 lg:py-32`
- **DO NOT** add `color: inherit` to `h1-h6` — it overrides Tailwind `text-white`/`text-navy` utilities
- `color: inherit` was the cause of the Destacada white text bug — always check for this after CSS changes
- **Phone number**: SheetDB interprets `+` as formula prefix — always save phone as plain digits string
- **SheetDB column names** must match exactly what the POST sends: `Nombre`, `Correo`, `Telefono`, `Mensaje`, `Fecha`
