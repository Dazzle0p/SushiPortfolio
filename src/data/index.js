export const ROLES = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'Java Backend Developer',
  'AI Integration Builder',
]

export const WHAT_I_BRING = [
  {
    icon: '⚡',
    title: 'Performance First',
    desc: 'Lighthouse 95+, 62% faster APIs, lazy loading & code splitting across every project.',
  },
  {
    icon: '🏗️',
    title: 'Production Mindset',
    desc: 'Live deployments, real users, real bugs — freelance + startup + enterprise experience.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Gemini API for analytics, summaries & AI features shipped in production apps.',
  },
  {
    icon: '🔐',
    title: 'Secure by Default',
    desc: 'JWT, bcrypt, RBAC, Helmet.js, rate limiting — security baked in, not bolted on.',
  },
]

export const STATS = [
  ['5+', 'Live Projects'],
  ['62%', 'API Speed Gain'],
  ['550+', 'DSA Problems'],
  ['95+', 'Lighthouse Score'],
]

export const EXPERIENCE = [
  {
    role: 'Vibe Code Intern',
    company: 'Flashspace',
    type: 'PropTech Startup',
    period: 'Oct 2025 – Jan 2026',
    color: '#00e5a0',
    points: [
      'Shipped 10+ React components & fixed 15+ production bugs for 5,000+ monthly users using AI-assisted tools (Claude, Lovable)',
      'Boosted Lighthouse score 72 → 91 via lazy loading & code splitting — bundle size down 25%',
      'Improved UI consistency by 30% and page load performance by 20–25% within agile sprints',
    ],
  },
  {
    role: 'Java Developer Trainee',
    company: 'Capgemini',
    type: 'Enterprise Training',
    period: 'Jan 2026 – Apr 2026',
    color: '#60a5fa',
    points: [
      'Built backend modules with Java, Spring Boot & REST APIs — query-driven analytics with filtering and pagination',
      'Applied JDBC, JPA/Hibernate, OOP, Collections, multithreading, DAO/DTO patterns & layered architecture',
      'Practiced TDD with JUnit 5 & Mockito; CI/CD pipelines with Maven & Jenkins',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    type: '5+ Client Projects',
    period: 'Jul 2025 – Oct 2025',
    color: '#f59e0b',
    points: [
      'Delivered 5+ full-stack apps (healthcare, e-commerce, SaaS) achieving 95+ Lighthouse scores and 40% faster load times',
      'Cut API response time 62% (320ms → 120ms) via query optimisation and caching; secured 3 repeat clients',
      'Managed DNS, SSL, SPA routing, and Vercel deployments end-to-end independently',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'HealthMitraUs.com',
    tag: 'Healthcare SaaS',
    period: 'Apr – May 2026',
    live: 'https://healthmitraus.com',
    github: null,
    stack: ['Next.js 16', 'React 19', 'Supabase', 'TypeScript', 'Stripe', 'Razorpay', 'Nodemailer', 'Tailwind v4'],
    desc: 'Multi-tenant healthcare platform with 5 specialised dashboards (Admin, Client, Partner, Franchise, Call-Centre), granular RBAC, dual payment gateways, and a secure Personal Health Record module.',
    highlight: '5 dashboards · Dual payments · PHR module',
    accent: '#00e5a0',
    featured: true,
  },
  {
    name: 'PebloNotes',
    tag: 'AI Notes Workspace',
    period: '2025',
    live: 'https://peblo-notes-two.vercel.app',
    github: 'https://github.com/Dazzle0p/PebloNotes',
    stack: ['React 18', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'Zustand', 'JWT', 'Recharts'],
    desc: 'Full-stack AI-powered notes workspace. Auto-saves on every keystroke (debounced), Gemini AI generates summaries, action items & title suggestions per note. Public sharing via nanoid links, real-time search/tag filtering, and an insights dashboard with weekly activity charts.',
    highlight: 'AI summaries · Auto-save · Public sharing · Dashboard',
    accent: '#a29bfe',
    featured: true,
  },
  {
    name: 'GamePulse',
    tag: 'AI Esports Platform',
    period: 'Aug – Sep 2025',
    live: 'https://gamepulse-in.vercel.app',
    github: 'https://github.com/Dazzle0p/GamePulse',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Tailwind CSS', 'Gemini AI', 'Cloudinary'],
    desc: 'Esports platform listing 200+ players, 50+ creators & 10+ organizers. Gemini AI auto-generates player summaries, performance insights & brand-fit predictions for sponsorship decisions.',
    highlight: 'AI analytics · 200+ player profiles',
    accent: '#ff6b6b',
    featured: false,
  },
  {
    name: 'Vastram',
    tag: 'E-commerce',
    period: 'Apr – Jul 2025',
    live: null,
    github: 'https://github.com/Dazzle0p/Vastram',
    stack: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'PayPal'],
    desc: 'Full-stack MERN e-commerce with role-based auth, PayPal checkout, 30+ REST APIs, and an admin dashboard managing products, users, orders and revenue analytics.',
    highlight: '30+ REST APIs · RBAC · PayPal checkout',
    accent: '#ffd166',
    featured: false,
  },
  {
    name: 'Virtelon.com',
    tag: 'Company Web App',
    period: 'Sep – Oct 2025',
    live: 'https://virtelon.com',
    github: null,
    stack: ['React.js', 'React Router', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    desc: 'Mobile-first web app for a service-based company. Near-perfect SEO scores, 20% lower bounce rate, 40% smaller bundle via dynamic code splitting.',
    highlight: 'SEO optimised · 40% faster load',
    accent: '#00c9ff',
    featured: false,
  },
  {
    name: 'Conversa AI',
    tag: 'AI Chat App',
    period: 'Jan – Feb 2025',
    live: null,
    github: 'https://github.com/Dazzle0p/Gemini-Clone',
    stack: ['React', 'Gemini API', 'JavaScript', 'CSS'],
    desc: 'Multi-session AI chat with persistent state, voice-to-text input, and Markdown rendering. 95+ Lighthouse score with improved load efficiency for returning users.',
    highlight: '95+ Lighthouse · Voice-to-text',
    accent: '#34d399',
    featured: false,
  },
]

export const SKILLS = {
  Frontend: ['React.js', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'JWT', 'JPA/Hibernate', 'JDBC'],
  Databases: ['MongoDB', 'MySQL', 'Supabase', 'Mongoose'],
  Languages: ['JavaScript (ES6+)', 'Java', 'TypeScript', 'SQL'],
  'Tools & DevOps': ['Git', 'GitHub', 'Postman', 'Vercel', 'Maven', 'Jenkins', 'CI/CD', 'Cloudinary', 'Stripe', 'Razorpay'],
  'AI & Testing': ['Gemini API', 'Prompt Engineering', 'JUnit 5', 'Mockito', 'TDD'],
}

export const CONTACT_LINKS = [
  { label: 'Email', val: 'sushantjha1205@gmail.com', href: 'mailto:sushantjha1205@gmail.com' },
  { label: 'LinkedIn', val: '/in/sushantjha1205', href: 'https://linkedin.com/in/sushantjha1205' },
  { label: 'GitHub', val: 'github.com/Dazzle0p', href: 'https://github.com/Dazzle0p' },
  { label: 'Twitter', val: '@imsushant02', href: 'https://twitter.com/imsushant02' },
]
