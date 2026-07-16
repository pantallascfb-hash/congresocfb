# Nuxcrew GT — Dev Log

## Stack
- React 19 + React Router 7
- Vite 8 + Rolldown
- Tailwind CSS 4 + DaisyUI 5
- GSAP, Motion, AOS

## Analytics
- GTM: `GTM-N6XPHHK4`
- GA4: `G-LL4EN8TJPX`
- Dual delivery: dataLayer + direct gtag('event')
- Events: page_view, cta_click, nav_click, form_submit, dismiss_promo, geo_ready
- Geo lookup via ipapi.co / ip-api.com (country, city, region, ISP)

## CTA Buttons Instrumented (27 total)
- WhatsApp CTAs (7): banner, about, skills, contact ×2, navbar, footer
- Email (3): footer ×2, contact card
- Nav links (10): mobile + desktop, logo
- Forms (2): EmailJS contact, testimonials
- Other: promo dismiss, scroll-to-top, "Ver soluciones", back/repo/demo on detail page

## Sections (SPA)
- Hero, Problemas, Soluciones, Proyectos, Contacto
- Promo banner: Q299 landing offer (dismissible, top bar)

## Pages
- `/` — Home (sections)
- `/details/:id` — Project detail from /projects.json
