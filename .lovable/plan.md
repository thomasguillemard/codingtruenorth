## Early Access onboarding page

### Overview

Create a dedicated `/early-access` page that serves as the primary signup destination. It combines urgency, social proof, and a clear value proposition: sign up with your email and immediately receive access to the free PRD Review Analysis tool, with the full open beta coming soon.

### Page structure (top to bottom)

**1. Hero banner with live counter**

- Headline: "Join the product leaders shaping what's next"
- A live animated counter showing how many people have already signed up (starts at a base number like 847, incremented randomly on page load to feel dynamic)
- Animated counting effect using `useEffect` + `setInterval` that ticks up from a lower number to the "current" count
- Pulsing green dot + "X PMs joined yesterday" social proof line

**2. What you get immediately (3 feature cards, horizontal on desktop)**

- Card 1: "Access to our PRD review analysis" Submit your PRD and get an AI-powered evaluation of clarity, completeness, and prioritization gaps. Sent straight to your inbox.
- Card 2: "Open beta access" Be among the first to use TrueNorth's prioritization engine when it launches. Early users shape the product.
- Card 3: "Product strategy insights" Weekly curated insights on what top PMs are doing differently. No fluff, only signal.

Each card animates in sequentially with staggered delays.

**3. Email signup form (centered, prominent)**

- Large email input + "Get instant access" button with arrow icon
- Below the form: small trust line "No spam. Unsubscribe anytime."
- On submit: the form transitions to a success state with confetti-style animation showing "Check your inbox -- your PRD review access is on its way"

**4. Roadmap teaser ("What's coming")**

- A minimal vertical timeline with 3 milestones:
  - "Now" -- Free PRD review analysis (marked as available with a green check)
  - "Q2 2026"  Open beta: full prioritization engine
- Each milestone animates in on scroll

**5. Bottom CTA**

- "The best PMs don't wait for perfect tools. They shape them." with a secondary signup form or scroll-to-top button

### Navigation updates

- Add `/early-access` route in `App.tsx`
- Update "Get Early Access" buttons in Navbar, Hero, and CTASection to link to `/early-access` instead of `#cta`
- Keep the `#cta` section on Index as a secondary inline signup

### Technical details

**New file:** `src/pages/EarlyAccess.tsx`

- Uses `framer-motion` for all animations (staggered cards, counter tick-up, success state transition)
- Animated counter: `useState` + `useEffect` with `setInterval` that increments from `baseCount - 30` to `baseCount` over ~2 seconds
- Email form with `useState` for email and submitted state (same pattern as CTASection)
- Responsive: single column on mobile, 3-column grid for feature cards on desktop
- Includes `Navbar` and `Footer` for consistent layout
- Icons from `lucide-react`: `Mail`, `Sparkles`, `Users`, `Check`, `ArrowRight`, `Zap`, `FileText`

**Modified files:**

- `src/App.tsx` -- add `<Route path="/early-access" element={<EarlyAccess />} />`
- `src/components/Navbar.tsx` -- change "Get Early Access" `href="#cta"` to `Link to="/early-access"`
- `src/components/Hero.tsx` -- change "Get Early Access" `href="#cta"` to a `Link to="/early-access"`

No new dependencies required.