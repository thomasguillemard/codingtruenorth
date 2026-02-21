

## Workflow Section: Horizontal Animated Flow Redesign

### Problem

The current layout uses a vertical timeline with a static `1px` line on the left side (`bg-border`). This feels flat and disconnected -- the line doesn't animate, doesn't convey movement, and the vertical stacking doesn't communicate a "flow" or progression.

### Proposed Redesign

Replace the vertical timeline with a **horizontal left-to-right flow** on desktop, where each step is a card connected by animated SVG paths (similar to the Prioritization Engine pipeline). On mobile, it stacks vertically with animated downward connectors.

### Layout

**Desktop (4 columns with animated connectors between them):**

```text
+------------+  ~~~>  +------------+  ~~~>  +------------+  ~~~>  +------------+
| Discovery  |        | Prioritize |        | Spec Gen   |        | Handoff    |
|   [icon]   |        |   [icon]   |        |   [icon]   |        |   [icon]   |
| 01         |        | 02         |        | 03         |        | 04         |
| desc...    |        | desc...    |        | desc...    |        | desc...    |
+------------+        +------------+        +------------+        +------------+
```

The `~~~>` connectors are animated dashed SVG lines with a traveling glow dot (reusing the same `PipelineConnector` pattern from the Prioritization section).

**Mobile:** Cards stack vertically with short animated vertical connectors between them.

### Animation Sequence

Each step and connector animates sequentially on scroll using `useInView`:

1. **Step 1 card** fades in (0s)
2. **Connector 1** draws left-to-right (0.3s)
3. **Step 2 card** fades in (0.6s)
4. **Connector 2** draws (0.9s)
5. **Step 3 card** fades in (1.2s)
6. **Connector 3** draws (1.5s)
7. **Step 4 card** fades in (1.8s) -- the final "Handoff" step gets a subtle accent glow

### Visual Style for Each Card

- Step number badge (01, 02, 03, 04) in a small rounded circle
- Icon centered above the title
- Title bold, description below in muted text
- Bordered card with `bg-card` background, matching the rest of the site's design language
- The last step (Handoff to Agents) uses the accent color to signal the "output" stage

### Technical Details

- **File modified:** `src/components/WorkflowSection.tsx` (rewrite)
- **Reuses:** `PipelineConnector` component from `src/components/prioritization/PipelineConnector.tsx` for the animated SVG connectors
- **Animation:** `framer-motion` `useInView` with staggered delays for sequential reveal
- **No new dependencies**
- **Desktop grid:** `lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]` (4 cards + 3 connectors)
- **Mobile:** Vertical stack with `PipelineConnector direction="vertical"` between each card
- Removes the static `bg-border` line entirely

