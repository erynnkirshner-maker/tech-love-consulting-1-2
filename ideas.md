# Tech Love Consulting — Design Brainstorm

## Context
A boutique AI strategy consultancy for founder-led businesses. The site must feel warm, operationally credible, and approachable. Avoid: AI/tech aesthetics, corporate blue-gray, stock photography, neon gradients. Brand colors: Deep teal, dusty plum, muted apricot, soft sand, soft cream. Fonts: Nunito (body), Lora (headlines).

---

<response>
<idea>

## Approach 1: "Editorial Warmth" — Magazine-Style Storytelling

**Design Movement**: Editorial design meets Scandinavian minimalism. Inspired by independent publishing and long-form journalism layouts.

**Core Principles**:
1. Content-first hierarchy — generous reading columns with intentional typographic rhythm
2. Quiet confidence — the design recedes to let Erynn's voice dominate
3. Tactile warmth — subtle paper-like textures and soft shadows that evoke trust
4. Purposeful restraint — every element earns its place

**Color Philosophy**: Deep teal as the anchor of authority and calm. Soft cream as the primary canvas (not white — warmer, less clinical). Dusty plum for accent moments that signal depth. Muted apricot only for CTAs and interactive highlights — it becomes the "action" color through scarcity.

**Layout Paradigm**: Asymmetric editorial columns. Content flows in a 7/5 or 8/4 grid ratio. Headlines break into the margin. Pull quotes and key statements get their own breathing room in offset columns. No centered hero blocks — everything has a directional flow that pulls the eye forward.

**Signature Elements**:
1. "Margin notes" — key credibility points or definitions that float alongside the main content column
2. Horizontal rule dividers with subtle gradient fades (teal to transparent) between sections
3. Oversized Lora serif pull quotes that anchor each page section

**Interaction Philosophy**: Interactions are subtle and editorial — text links that underline on hover with a gentle color shift, cards that lift with a whisper of shadow, page transitions that feel like turning a page (gentle horizontal slide).

**Animation**: Entrance animations are scroll-triggered and gentle: content fades up 12px with 400ms ease-out. Stagger between elements is 60ms. No bounce, no overshoot. CTAs have a 160ms scale(0.97) on press. Hover states transition in 200ms. The overall feeling is "unhurried confidence."

**Typography System**: Lora (serif) at 700 weight for H1s (clamp 2.5rem–4rem), Lora 600 for H2s. Nunito 400 for body at 18px/1.7 line-height for readability. Nunito 600 for UI elements and navigation. Letter-spacing: -0.02em on headlines, normal on body.

</idea>
<probability>0.07</probability>
<text>An editorial, magazine-inspired design that uses asymmetric layouts and generous typography to let Erynn's voice lead.</text>
</response>

---

<response>
<idea>

## Approach 2: "Grounded Modernism" — Architectural Clarity

**Design Movement**: Swiss-influenced modernism softened with organic warmth. Think Dieter Rams meets a well-designed independent bookstore.

**Core Principles**:
1. Structural clarity — information architecture is visible in the layout itself
2. Warm materiality — the digital equivalent of natural wood and linen
3. Decisive hierarchy — the visitor always knows what matters most
4. Earned complexity — simple surfaces that reveal depth on interaction

**Color Philosophy**: Soft sand as the dominant background — warm, grounding, never sterile. Deep teal used sparingly but boldly for structural elements (navigation bar, footer, section dividers) creating a sense of architectural framing. Dusty plum for secondary headings and hover states. Muted apricot exclusively for primary CTAs — it pops against sand without screaming.

**Layout Paradigm**: Card-based modular grid with intentional negative space between modules. Sections are visually "contained" — each has clear boundaries (subtle background shifts between soft cream and soft sand). The page reads as a vertical stack of distinct, well-crafted rooms rather than an infinite scroll. Navigation is a persistent top bar with teal background.

**Signature Elements**:
1. "Framework blocks" — content sections with a thin left border in teal that signals structured thinking
2. Rounded-corner cards with a 1px sand-to-cream gradient border and soft drop shadow
3. Icon-free design — relies entirely on typography and color for hierarchy (no generic line icons)

**Interaction Philosophy**: Interactions feel precise and intentional. Cards elevate on hover (translateY -4px, shadow deepens). Buttons have a firm press state. Navigation items have a bottom-border slide-in on hover. Everything communicates "this was built with care."

**Animation**: Page load: hero content appears immediately (no animation on above-fold). Below-fold sections fade in on scroll with 300ms ease-out, 8px upward translate. Card hovers: 200ms cubic-bezier(0.23, 1, 0.32, 1). Mobile: reduced motion by default. Accordion/FAQ items expand with 250ms ease-out height animation.

**Typography System**: Lora 700 for H1 (clamp 2.25rem–3.5rem), Lora 600 italic for subheadlines. Nunito 400 for body (17px/1.65). Nunito 700 for button text and nav items. All caps Nunito 600 at 13px with 0.08em tracking for labels and category tags.

</idea>
<probability>0.06</probability>
<text>A Swiss-modern approach with modular card layouts, architectural framing in deep teal, and warm sand backgrounds that feel grounded and precise.</text>
</response>

---

<response>
<idea>

## Approach 3: "Intimate Authority" — One-Person Studio Aesthetic

**Design Movement**: Independent studio/atelier design. Inspired by high-end personal brand sites (think: a well-known author's website or an architect's portfolio). Not a "firm" — a person with a practice.

**Core Principles**:
1. Personal presence — Erynn feels present on every page, not hidden behind a brand
2. Conversational flow — the layout mimics the rhythm of a good conversation (statement, pause, response)
3. Quiet luxury — premium feel without ostentation
4. Single-thread focus — each page has one clear path forward

**Color Philosophy**: Soft cream dominates (95% of surface area) creating an intimate, gallery-like space. Deep teal appears only in text and the primary CTA — it's the "voice" color. Dusty plum is reserved for the navigation and footer, creating a subtle frame. Muted apricot appears once per page as a highlight moment (a key statistic, a pull quote border, or the CTA hover state). The restraint itself communicates sophistication.

**Layout Paradigm**: Single-column with generous max-width (680px for body content, expanding to 960px for card grids). The narrow column creates intimacy — it reads like a letter, not a brochure. Hero sections use full-width with the content still constrained. Sections breathe with 120-160px vertical padding. The page has a vertical rhythm that feels almost poetic.

**Signature Elements**:
1. A thin horizontal line (1px, dusty plum at 30% opacity) between major sections — like paragraph breaks in a well-typeset book
2. The "conversation marker" — key statements are set in Lora italic at a slightly larger size, indented, creating the feeling of Erynn speaking directly
3. Generous letter-spacing on section labels (all-caps Nunito) that float above content like chapter markers

**Interaction Philosophy**: Minimal, purposeful. Links change color (teal to plum) on hover. The primary CTA has a subtle background transition (apricot deepens by 10% on hover). No cards that flip, no parallax, no scroll-jacking. The interaction philosophy says: "I respect your time."

**Animation**: Almost none — and that's the point. Page transitions: instant. Scroll animations: none (content is simply there). The only animations: CTA button press (scale 0.97, 120ms), mobile menu slide (200ms ease-out), and a single entrance animation on the hero headline (fade up 8px, 500ms, once on page load). The stillness itself is a design choice.

**Typography System**: Lora 700 for H1 (clamp 2rem–3rem — intentionally smaller than typical, creating intimacy). Lora 400 italic for subheadlines and pull quotes. Nunito 400 for body (18px/1.75 — extra generous line height for readability). Nunito 600 for navigation and buttons. The type is the design.

</idea>
<probability>0.08</probability>
<text>A minimal, intimate single-column design that reads like a personal letter — quiet luxury, maximum readability, Erynn's presence on every page.</text>
</response>

---

## Selected Approach

I am selecting **Approach 3: "Intimate Authority"** as the design direction.

This approach best aligns with the PRD requirements:
- The reference sites (Reboot.io, Win Without Pitching) all feature a strong single-founder presence
- The "one founder, strong POV, direct voice on every page" requirement maps perfectly to the intimate single-column layout
- The warm, approachable, operationally credible feel is achieved through restraint rather than decoration
- It avoids all the "don't" items: no tech aesthetic, no corporate feel, no stock imagery dependency
- The narrow reading column makes Erynn's approved copy shine — it reads like a conversation, which matches her voice
