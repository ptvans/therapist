# Product Requirements Document: Aligned Heart Therapist Website

## Project Overview

A modern React web application for "Aligned Heart," a private therapy practice run by Terra Crowl, LCSW (Licensed Clinical Social Worker). The site showcases therapeutic services, allows new clients to submit intake requests, and integrates with the GoHighLevel CRM platform.

**Live URL:** www.youralignedheart.com

---

## Technologies

| Category | Technology |
|----------|------------|
| Frontend Framework | React 18.2.0 with React Router DOM 6.20.1 |
| Build Tool | Vite 5.0.8 |
| API Communication | Axios 1.6.2 |
| Styling | CSS3 with CSS variables |
| Fonts | Inter (sans-serif) & Cormorant Garamond (serif) |
| Deployment | GitHub Pages with GitHub Actions CI/CD |
| CRM Integration | GoHighLevel REST API |

---

## Project Structure

```
therapist/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Header.jsx        # Navigation with hamburger menu
│   │   ├── Footer.jsx        # Footer with contact info
│   │   └── InstagramIcon.jsx # Social media icon
│   │
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # Therapist background
│   │   ├── Services.jsx      # English services & rates
│   │   ├── Servicios.jsx     # Spanish services & rates
│   │   └── NewClient.jsx     # Client intake form
│   │
│   ├── services/
│   │   └── api.js            # GoHighLevel API integration
│   │
│   ├── App.jsx               # Main app with routing
│   └── main.jsx              # React entry point
│
├── public/
│   └── CNAME                 # Custom domain config
│
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions deployment
│
└── vite.config.js            # Vite configuration
```

---

## Current Features

### 1. Home Page (`/`)
- Hero section with therapist portrait
- Practice name and tagline
- Specialties sections for individuals and couples
- Call-to-action buttons

### 2. About Page (`/about`)
- Therapist background and experience (8+ years)
- Therapeutic modalities: Motivational Interviewing, ACT, MBCT
- "Who I Work With" section

### 3. Individual Therapy Pages
- **Individuals Landing** (`/individuals`): Overview with service cards
- **Anxiety Treatment** (`/individuals/anxiety`): ACT and MBSR approaches
- **Sex & Love Addiction** (`/individuals/sex-love-addiction`): Recovery support

### 4. Couples Therapy Pages
- **Couples Landing** (`/couples`): Overview with service cards
- **Communication & Connection** (`/couples/communication`): Gottman Method and EFT

### 5. Rates Page (`/services`)
- Rates ($180 individual / $300 couples), insurance, sliding scale, cancellation policy, teletherapy

### 6. New Client / Contact (`/new-client`)
- Embedded LeadConnector intake form (iframe)
- "Getting Started" and "What Happens Next" info cards

### 7. Blog
- External link to WordPress blog at blog.youralignedheart.com

### 8. Navigation
- Fixed header with responsive hamburger menu
- Nav links: Individuals, Couples, About, Rates, Blog
- "Get Started" CTA button linking to `/new-client`
- Instagram icon (external link)
- "Schedule a Free Consultation" CTA button in hero section of every page (except Contact)

---

## Design System

### Color Palette
- Primary: `#6B9080` (Sage Green)
- Secondary: `#A4C3B2` (Light Sage)
- Accent: `#CCE3DE` (Very Light Sage)
- Text Primary: `#2C3E50` (Dark Blue-Gray)
- Text Secondary: `#6B7C85` (Medium Gray)
- Background: `#FAFCFB` (Off-white)

### Typography
- Headings: Cormorant Garamond (serif)
- Body: Inter (sans-serif)

---

## GoHighLevel Integration

**Environment Variables Required:**
- `VITE_GHL_API_KEY` - API authentication
- `VITE_GHL_LOCATION_ID` - Location identifier

**Demo Mode:** Site functions without API credentials for testing.

---

## Deployment

- **Platform:** GitHub Pages
- **Trigger:** Push to main branch
- **Domain:** www.youralignedheart.com

**NPM Scripts:**
```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
npm run preview  # Preview production build
```

---

## Conversion Rate Benchmarks & Best Practices

### Key Metrics
| Performance Level | Conversion Rate |
|-------------------|-----------------|
| Top-performing therapy websites | 15-25% |
| Average healthcare | 9-10% |
| Most therapy practice websites | 2-3% |

### Essential Elements of High-Converting Therapist Websites

#### 1. Clear, Client-Focused Value Proposition
- Focus on addressing client pain points and barriers, not credentials
- Use empathetic, no-pressure language like "Explore whether therapy is right for you" rather than sales language
- Trust words ("proven," "recommended") increase conversion rates
- Fear words ("harmful," "illness") correlate with lower conversion rates

#### 2. Strategic Call-to-Action Placement
- Landing pages perform best with 1-3 strategically placed CTAs
- Multiple contact methods easily visible on every page (phone, email, contact form)
- Simplified booking process with minimal form fields

#### 3. Trust-Building Elements
- Client testimonials and success stories positioned strategically
- FAQ sections addressing common concerns and barriers
- Therapist introduction videos helping clients assess fit
- Clear explanation of what happens next after contact

#### 4. Progressive Engagement Options
- Educational resources demonstrating expertise
- Self-assessment tools
- Virtual office tours
- Email newsletter signup for those not ready to commit

#### 5. Scarcity Without Desperation
- Language like "Currently accepting a limited number of Saturday appointments" rather than appearing desperate for clients
- Shows availability while implying demand

#### 6. Mobile-First, User-Friendly Design
- Fast loading speed (slow sites kill conversions)
- Easy navigation with essential info readily accessible
- Readable text and images (poor contrast is a common mistake)
- Clear contact information on every page

---

## ADA / WCAG 2.1 AA Compliance Requirements

Therapist websites must be accessible under ADA as "places of public accommodation." The DOJ recognizes WCAG 2.1 AA as the compliance standard. Non-compliant websites risk lawsuits.

### Perceivable (WCAG 1.x)
- All images must have descriptive alt text or be marked decorative (`alt=""`)
- Text color contrast must meet 4.5:1 for normal text, 3:1 for large text (18pt+)
- No information conveyed by color alone
- Captions/transcripts required for any future video/audio content

### Operable (WCAG 2.x)
- Full keyboard navigation — all interactive elements reachable and operable
- Visible focus indicators on all interactive elements (no `outline: none` without replacement)
- Skip-to-content link to bypass repeated navigation
- No content that flashes more than 3 times per second
- `prefers-reduced-motion` media query to disable animations for vestibular disorder users

### Understandable (WCAG 3.x)
- Proper heading hierarchy (single `<h1>` per page, no skipped levels)
- Form inputs must have associated `<label>` elements
- Required fields must use `required` or `aria-required="true"`
- Error messages must be linked to inputs via `aria-describedby`
- Status messages (success/error) must use `role="alert"` or `aria-live`

### Robust (WCAG 4.x)
- Icon-only links/buttons must have `aria-label` text
- Links opening new tabs should indicate this (e.g., "opens in new tab")
- Semantic HTML (`<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`)
- Navigation landmarks should have `aria-label` when multiple exist

### Additional Best Practices
- Descriptive link text (avoid generic "Learn more" or "Click here")
- Mobile responsive design
- PDF/document files must be screen-reader accessible
- Regular accessibility audits

---

## Future Considerations

- [ ] Calendar integration for booking
- [ ] Testimonials page
- [ ] Resource library for clients
- [ ] Multi-language expansion
