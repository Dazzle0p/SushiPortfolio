# Sushant Kumar Jha — Portfolio

A single-page portfolio built with **Vite + React**. Black-themed, AOS scroll animations, working contact form via EmailJS.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173
```

## Activate the Contact Form (EmailJS — free)

1. Go to https://emailjs.com → create a free account
2. **Add a service** (Gmail works) → copy the **Service ID**
3. **Create a template** — use these variables in the template body:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — the message
   → copy the **Template ID**
4. **Account → API Keys** → copy your **Public Key**
5. Open `src/components/Contact.jsx` and replace the three placeholders at the top:

```js
const SERVICE_ID  = 'YOUR_SERVICE_ID'   // ← paste here
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // ← paste here
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // ← paste here
```

## Deploy to Vercel (free, ~2 minutes)

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — GitHub
# Push this folder to a GitHub repo, then import it on vercel.com
# Build command : npm run build
# Output dir    : dist
# No env vars needed
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── About.jsx / .module.css
│   ├── Experience.jsx / .module.css
│   ├── Projects.jsx / .module.css
│   ├── Skills.jsx / .module.css
│   ├── Contact.jsx / .module.css
│   ├── Footer.jsx / .module.css
│   └── Section.module.css   ← shared heading styles
├── data/
│   └── index.js             ← ALL content lives here — edit this to update the site
├── App.jsx
├── main.jsx
└── index.css
```

## Customising Content

Everything you'd want to change is in **`src/data/index.js`**:
- Add/remove projects → `PROJECTS` array
- Update experience → `EXPERIENCE` array
- Change skills → `SKILLS` object
- Update stats → `STATS` array
