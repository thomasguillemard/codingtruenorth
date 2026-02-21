
## Consolidate Early Access onto the Homepage

Instead of a separate `/early-access` page, the signup form will live directly on the homepage. All "Get Early Access" buttons will anchor-scroll to that form section.

### Changes

**1. Add `id="early-access"` to CTASection (`src/components/CTASection.tsx`)**
- Add `id="early-access"` to the `<section>` element so buttons can anchor to it.

**2. Update Navbar buttons (`src/components/Navbar.tsx`)**
- Change the "Get Early Access" `<Link to="/early-access">` to an `<a href="/#early-access">` for both desktop and mobile menus, so it scrolls to the CTA form on the homepage.

**3. Update Hero CTA button (`src/components/Hero.tsx`)**
- Change the "Get Early Access" `<Link to="/early-access">` to an `<a href="#early-access">` so it scrolls down to the form.

**4. Remove the dedicated Early Access page**
- Delete `src/pages/EarlyAccess.tsx`.
- Remove the `/early-access` route and import from `src/App.tsx`.

**5. Clean up Footer (`src/components/Footer.tsx`)**
- If there are any remaining links to `/early-access`, update or remove them.

### Technical Notes
- The existing hash-scroll logic in `Index.tsx` already handles `/#early-access` when navigating from other pages (e.g., 404).
- The CTASection already has the full signup form with email submission to the database, so no functionality is lost.
