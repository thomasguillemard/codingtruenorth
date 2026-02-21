

## Prioritization Engine Section -- Redesign

### What's wrong today

- The 4 stat cards on the left are disconnected vanity metrics ("2,847 signals analyzed", "94% alignment score"). They don't explain the product or build trust -- they're just filler.
- The ranking table on the right shows a final output (ranked features) but never explains *how* the score is calculated, which is the core differentiator.
- There's no narrative arc: nothing tells the visitor "here's what goes in, here's what happens, here's what comes out."

### Proposed redesign: "Input -> Engine -> Output" storytelling

Replace the current two-column layout with a **three-step visual narrative** that walks the visitor through how TrueNorth's prioritization actually works.

#### Structure

**Section header** (keep similar copy, slightly refined):
- Tagline: "Prioritization Engine"
- Headline: "From raw signals to ranked priorities"
- Subtitle: "TrueNorth ingests feedback from every channel, weighs it against your business objectives, and outputs a confidence-ranked backlog -- no spreadsheets, no debates."

**Three-column breakdown** (on desktop; stacks on mobile):

| Column | Title | Content |
|--------|-------|---------|
| 1. Signals In | "Every voice, one funnel" | Shows 3-4 source chips (Support tickets, User interviews, Analytics events, Sales calls) with mock counts, illustrating that the engine aggregates diverse input. |
| 2. Scoring Engine | "Weighted confidence scoring" | A small visual showing the 3 scoring dimensions: **Demand** (how many users want it), **Strategic fit** (alignment to business goals), **Effort estimate** (complexity). Each with a mini bar or icon. This is the "how" that's currently missing. |
| 3. Ranked Output | "Your prioritized backlog" | A compact ranked list (3-4 items) similar to the current table, but each row now shows the three dimension scores that feed into the final confidence number, making the output feel earned and transparent. |

**Below the three columns**, optionally keep a single standout stat line, e.g.: "Teams using TrueNorth cut prioritization debates by 80% and ship the right features 3x faster." -- one clear value statement instead of four vague cards.

### Technical changes

- **File modified**: `src/components/PrioritizationSection.tsx` (full rewrite of the component)
- **No new dependencies** -- uses existing `framer-motion`, `lucide-react` icons, and Tailwind classes
- **Data**: Replace the current `features` and `mockFeatures` arrays with new structured data for the three columns (sources, scoring dimensions, ranked output with per-dimension scores)
- **Layout**: Switch from `lg:grid-cols-2` to a `lg:grid-cols-3` grid with connecting visual hints (subtle arrows or step numbers) between columns
- **Mobile**: Columns stack vertically with step numbers (1, 2, 3) to preserve the narrative flow

### What this achieves

- Visitors immediately understand *what goes in* (raw signals), *what happens* (weighted scoring across three dimensions), and *what comes out* (a ranked backlog with transparent scores)
- The section now explains the product's core differentiator rather than displaying meaningless stats
- The ranking table becomes more credible because you can see *why* each feature scored the way it did

