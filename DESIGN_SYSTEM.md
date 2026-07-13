# MG & Associés — Master Website Design System & Creative Direction

## Project

Design and develop the official website for **Cabinet Mourad Guellaty (MG & Associés)**.

This is **not** a startup.

This is **not** a SaaS landing page.

This is **not** a template website.

It is a premium audit, accounting, tax and advisory firm based in Tunisia. Every page must communicate precision, trust, expertise, discretion and timeless elegance.

The website should feel like the digital identity of a prestigious consulting firm that has existed for decades while remaining modern.

---

# Creative Direction

The design language should feel inspired by the best editorial and corporate websites in the world.

Visual references include

* Apple Editorial
* Pentagram
* Aesop
* McKinsey
* Deloitte Digital
* Stripe Press
* Framer Award Winners
* Studio Freight
* Instrument
* Porto Rocha

The website should feel handcrafted rather than assembled from UI components.

Every section must breathe.

Whitespace is part of the design.

---

# Design Philosophy

The interface should be

* Calm
* Sophisticated
* Editorial
* Minimal
* Premium
* Luxurious without being flashy
* Corporate without feeling cold

Avoid

* Startup aesthetics
* Generic templates
* Oversized icons
* Large groups of identical cards
* Heavy shadows
* Glassmorphism
* Neumorphism
* Bright gradients
* Decorative clutter

Every element must have a reason to exist.

---

# Visual Identity

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-dark` | `#0D0D0D` | Main background |
| `--color-light` | `#F5F5F3` | Light section backgrounds |
| `--color-accent` | `#C8352E` | Primary red for CTAs, labels, icons |
| `--color-accent-crystal` | `#B32509` | Darker red variant |
| `--color-card` | `#151515` | Card / panel backgrounds on dark |
| `--color-card-border` | `rgba(255,255,255,0.08)` | Card borders and dividers |
| `--color-text-primary` | `#FFFFFF` | Primary text on dark bg |
| `--color-text-muted` | `#9C9C9C` | Secondary text on dark bg |
| `--color-text-dark` | `#1A1A1A` | Primary text on light bg |
| `--color-text-dark-muted` | `#6B6B6B` | Secondary text on light bg |
| `--color-gold` | `#C8A96A` | Premium accent (sparingly) |

Gold should be used sparingly. It exists only to create premium accents. Never use it as a dominant color.

---

# Typography

## Editorial Typography

Large headlines use

* Playfair Display
* Cormorant Garamond

Body copy

* Inter

Hierarchy is extremely important. Large serif titles should contrast against small clean sans-serif paragraphs. Large headlines should occupy space. Do not fear oversized typography.

---

# Layout Philosophy

The website should never feel like stacked cards. Instead, think in editorial compositions. Alternate between text, imagery, quotes, statistics, white space and interaction rather than repeating the same layout.

## Content Width

`max-width: 1280px`

Sections should have generous breathing room. `py-32` should be considered the minimum spacing. Some sections can be even larger.

---

# Grid

12-column layout. Large gaps (`gap-20`). Generous margins. Never stretch content edge-to-edge.

---

# Visual Rhythm

Instead of:

```
Heading → Cards → Heading → Cards → Heading → Cards
```

Use:

```
Hero → Statement → Statistics → Editorial Image → Services → Quote → Industries → Team → FAQ → Recruitment → CTA
```

The page should continuously change rhythm.

---

# Imagery

Photography is architectural. Black and white. Minimal. Elegant. Concrete. Glass. Modern buildings. Professional offices.

Never use cliché business people shaking hands. When people appear, they should look authentic, natural, confident — not like stock photography.

---

# Components

## Buttons

Squared corners. Bold uppercase typography. Large horizontal padding. Simple hover animation. Arrow slides slightly. No rounded buttons.

## Cards

Cards should feel almost invisible. Very subtle borders. Dark background. Very light hover elevation. No shadows. No excessive icons.

## Icons

Use Lucide React. Stroke width `1.5`. Icons are secondary. Typography should dominate.

---

# Motion

Animations are subtle. Nothing should feel playful. Use Framer Motion.

Preferred animations: fade-up, opacity, slight translateY, accordion expansion, arrow movement, image parallax.

Everything between `250ms–500ms`. Smooth easing.

---

# Section Order

```
Header
Hero
Editorial Statement
Statistics
About
Client Marquee
Services
Industries
Team
Testimonials / Quote
FAQ
Careers / Nous Rejoindre
Contact
CTA
Footer
```

Notice the alternation between different content types.

---

# Career Section (Nous Rejoindre)

The Careers page is **not** another list of cards. It should feel like an editorial landing page.

Structure:

```
Hero
↓
Large inspirational quote
↓
Interactive FAQ
↓
Open positions
↓
Application CTA
```

Large whitespace. Architectural imagery. Editorial typography. Minimal interactions.

---

# Contact

Avoid a basic contact form. Create an experience. Split layout. Left: firm information (office, phone, email, map). Right: elegant minimal form.

---

# Interaction Principles

Every hover should be meaningful.

| Element | Behavior |
|---|---|
| Cards | Slight lift |
| Buttons | Arrow slides right |
| Images | Slow zoom (if applicable) |
| Links | Color transition |
| Accordion | Smooth expansion |

Never overanimate.

---

# Development Stack

| Technology | Version / Notes |
|---|---|
| React | 19 |
| TypeScript | ~6.0 |
| Vite | ^8.1 |
| Tailwind CSS | v4 |
| Framer Motion | ^12.42 |
| Lucide React | ^1.24 |

---

# Golden Rule

Whenever designing a new section, ask:

> **"Would this feel at home on an Awwwards-nominated corporate website, or does it feel like a template?"**

If it looks like a template, redesign it.

Prioritize typography, composition, rhythm and whitespace over decorative UI elements.
