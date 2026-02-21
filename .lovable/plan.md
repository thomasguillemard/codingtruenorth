

## Animated Pipeline: Prioritization Engine Redesign

### Concept

Replace the current static three-column layout with a **sequentially animated pipeline** that visually shows data "flowing" from raw signals through the scoring engine to the final ranked output. The animation triggers on scroll and plays out like a live demo of the product working.

### How It Works

The section will animate in **four timed phases** as the user scrolls into view:

**Phase 1 -- Raw Signals Arrive (0s-1s)**
- Individual signal cards (Jira ticket, support thread, sales call transcript, analytics event) slide in from the left one by one
- Each card looks like a mini-ticket with a realistic label (e.g., "JIRA-1042: Users can't export CSV", "Support: 47 users requesting dark mode")
- A pulsing dot or streaming particle trail shows them feeding into a central funnel

**Phase 2 -- Signals Funnel Into the Engine (1s-2s)**
- The signal cards shrink/fade and visually "compress" into a central processing block
- An animated connecting line (a dashed path or glowing trail) draws from the signals area to the scoring engine
- The scoring engine block lights up, showing it's "processing"

**Phase 3 -- Scoring Dimensions Activate (2s-3.5s)**
- Inside the engine block, the three scoring bars (Demand, Strategic Fit, Effort) animate from 0% to their values sequentially
- Each bar fills with a slight delay, like the engine is calculating each dimension one at a time
- Small labels appear showing what each dimension evaluates

**Phase 4 -- Ranked Output Emerges (3.5s-5s)**
- An animated connecting line draws from the engine to the output panel
- The ranked feature rows fade in one by one from top to bottom, each showing its confidence score
- The top-ranked item gets a subtle glow highlight to draw attention to the "winner"

### Visual Layout

On desktop, the layout is a **horizontal pipeline** with animated SVG connector lines between the three stages. On mobile, it stacks vertically with downward-flowing connectors.

```text
+------------------+       +------------------+       +------------------+
|   RAW SIGNALS    | ----> |  SCORING ENGINE   | ----> |  RANKED OUTPUT   |
|                  |       |                   |       |                  |
| JIRA-1042        |  ~~~> | Demand    [====] |  ~~~> | 1. Collaboration |
| Support #847     |       | Fit       [=====]|       | 2. Rate limiting |
| Sales call note  |       | Effort    [===]  |       | 3. Report builder|
| Analytics event  |       |                   |       | 4. Slack bot     |
+------------------+       +------------------+       +------------------+
```

The `---->` connectors are animated dashed lines or glowing particle trails that draw when data "flows" between stages.

### Technical Details

**File modified:** `src/components/PrioritizationSection.tsx` (rewrite)

**Data changes:**
- Replace generic source labels with realistic ticket-like entries (e.g., "JIRA-1042: Users requesting CSV export", "Support: Dark mode requests (47 threads)")
- Keep the scoring dimensions and ranked output data similar to current

**Animation approach (Framer Motion):**
- Use `useInView` to detect when the section enters the viewport and trigger the full sequence
- Use staggered `variants` with increasing `delay` values across the four phases
- Animated SVG connector paths using `motion.path` with `pathLength` animation (draws the line from 0 to 1)
- The progress bars already animate with `whileInView` -- extend this pattern to the full pipeline

**Connector lines:**
- SVG `path` elements positioned between the three cards using absolute positioning
- On desktop: horizontal curved paths; on mobile: short vertical paths
- Animated with `motion.path` using `pathLength` going from 0 to 1
- Styled with a dashed stroke in the primary color with a subtle glow

**No new dependencies** -- all achievable with existing `framer-motion` SVG animation capabilities and `lucide-react` icons.

**Mobile behavior:** Columns stack vertically. Connector lines become short downward arrows/paths between blocks. Step numbers remain for narrative clarity.

### What This Achieves

- The section now **feels like a product demo** -- visitors watch the engine work in real time
- The flow from "messy raw signals" to "clean ranked output" is viscerally clear
- The realistic ticket labels (Jira, support threads) make the product tangible and relatable to PM personas
- The animated connectors create a sense of data movement that static columns can't achieve
