# AI Data Recruitment SPA

Single Page Application B2B para vender servicios de Recruitment/Resourcing AI & Data-driven.

## Stack implementado
- React + Vite
- TypeScript
- CSS utility-like liviano (look tech startup)
- Enrutado SPA (home, blog, legal, admin)
- i18n ES/EN con autodetección + toggle visible
- Blog desde Markdown local
- Vercel Serverless Functions + Supabase (persistencia de leads)

> Nota: en este entorno de ejecución no fue posible instalar paquetes nuevos desde npm registry (403). Por eso la implementación usa alternativas nativas sin dependencias adicionales.

## Variables de entorno
Copiá `.env.example` a `.env`:

```env
VITE_WHATSAPP_NUMBER=5491112345678
VITE_CONTACT_EMAIL=hello@yourdomain.com
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
ADMIN_PASSWORD=change-this-password
```

## Supabase (tabla leads)
1. Crear proyecto.
2. Ejecutar `supabase.sql` en SQL Editor.
3. Cargar `SUPABASE_URL` y `SUPABASE_ANON_KEY` en Vercel y local.

## Ejecutar local
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy en Vercel
1. Subir repo a GitHub.
2. Vercel → **New Project** → importar repo.
3. Framework preset: **Vite**.
4. Cargar variables de entorno:
   - `VITE_WHATSAPP_NUMBER`
   - `VITE_CONTACT_EMAIL`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `ADMIN_PASSWORD`
5. Deploy.

## Rutas
- `/` Home one-page con anclas
- `/blog` listado
- `/blog/:slug` detalle desde markdown
- `/privacy` política de privacidad
- `/cookies` política de cookies
- `/admin` panel de leads (password)

## Conversión
- CTA principal: WhatsApp
- CTA secundario: email
- Formulario con validación + honeypot + persistencia en Supabase
