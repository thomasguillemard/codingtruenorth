

## Blog section: sentence-case titles and expandable articles

### Changes

**1. Fix title casing**

Update all four blog post titles from title case to sentence case:

- "Stop building the wrong things faster"
- "The death of the ticket manager PM"
- "Continuous discovery at scale with AI"
- "Confidence scores: the end of gut-feel prioritization"

**2. Expandable/collapsible article cards**

Each blog card becomes a toggle. Clicking it expands the card to reveal the full article body below the excerpt. Clicking again collapses it back.

- Add a `content` field to each post object containing 2-3 paragraphs of generated article text
- Track the currently expanded post slug in a `useState` (only one open at a time, or `null` for all closed)
- On click, toggle the expanded state for that article
- Use `framer-motion`'s `AnimatePresence` and `motion.div` with `animate={{ height: "auto" }}` for a smooth expand/collapse transition
- The arrow icon rotates downward when expanded, back to right when collapsed
- The expanded content area appears below the excerpt with a top border separator and slightly different text styling for readability

### Technical details

**File modified:** `src/pages/Blog.tsx`

- Add `useState<string | null>` to track `expandedSlug`
- Add a `content` string property to each post in the `posts` array (multi-paragraph article body)
- Wrap the article body in `AnimatePresence` + `motion.div` with `initial={{ height: 0, opacity: 0 }}` / `animate={{ height: "auto", opacity: 1 }}` / `exit={{ height: 0, opacity: 0 }}`
- Replace the `ArrowRight` icon with a `ChevronDown` that rotates based on expanded state (`rotate: expandedSlug === post.slug ? 180 : 0`)
- No new dependencies needed
