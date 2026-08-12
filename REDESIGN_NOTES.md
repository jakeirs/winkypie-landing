# Redesign Notes — winkypie.app landing page

If you're considering a redesign or fork of this landing page, read this first. It captures
the non-obvious decisions so you don't relitigate them from zero.

**Last touched:** 2026-06-17 · **Target:** iOS AI photo app (men only) · **Source-of-truth:** mobile app.

---

## TL;DR — the rules

1. **Mobile is canonical.** Copy and visual language come from the mobile app, not the other way around. If the mobile app says "She decided in 100 ms", the landing says the same. Drift = brand drift.
2. **Men only.** Every visible model, every pronoun about the user, every pose photo. Target persona is the dating-app man. Don't put women in BEFORE/AFTER, gallery rows, hero, or testimonials.
3. **No fake social proof.** No invented user counts, no fabricated testimonials, no fake star ratings. FTC + EU UCPD enforce this. "Fresh launch — be among the first" is honest, "12,000 happy users" is a lawsuit.
4. **No specific pricing on the page.** Pricing changes; the App Store listing is authoritative. Landing just says "free trial" + cancellation path. Anything dollar-figure-specific belongs in the app paywall, not here.
5. **iOS-first messaging.** Single App Store badge above the fold is the primary conversion path. No "coming soon to Android" — say it on a roadmap page if needed.

---

## Stack snapshot

- Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · TypeScript 5
- Fonts: **Inter** (sans) + **Fraunces** (serif, italic + opsz auto). Both via `next/font/google`.
- All routes static-prerendered. 10 routes (`/`, `/methodology`, `/privacy`, `/terms`, `/support`, `/robots.txt`, `/sitemap.xml`, `_not-found`).
- Path alias: `@/*` → repo root (see `tsconfig.json`).

---

## Design system tokens

CSS variables in `app/globals.css`:

| Token | Value | Notes |
|---|---|---|
| `--brand-bg` | `#0e0e0e` | Near-black page bg. Matches mobile. |
| `--brand-cta` | `#f59e0b` | Amber-orange — gradient start. |
| `--brand-cta-secondary` | `#ec4899` | Magenta — gradient end. |
| `--brand-primary` | `#f4b942` | Amber — kicker accent (rarely used now that kickers are pills). |
| `--font-inter` | sans body | |
| `--font-fraunces` | serif headlines | Use `.font-serif`. |

**Brand gradient is always `135deg, var(--brand-cta), var(--brand-cta-secondary)`.** Don't introduce other gradients.

**Italic gradient pattern** for the punch word in every headline — `<em className="gradient-text">word</em>`. Examples: "She decided in *100 ms*", "First photo. *First chance.*", "Looks pro. *Still you.*", "Be the right *swipe*."

---

## Component primitives

### `components/ui/CtaButton/CtaButton.tsx`

The `PulseGradientCta` from `mobile-app/PulseGradientCta`. 2-px gradient border with pulsing opacity (`0.4 ⇄ 0.9`, 1.4 s yoyo), dark interior with synced sheen pulse (`0.06 ⇄ 0.24`), left amber capsule with zap icon, white label, right arrow. Pure CSS — no Framer/Lucide deps.

### `components/ui/AppStoreBadge/AppStoreBadge.tsx`

Two variants:
- `variant="light"` (default) — white bg, black text. For dark page sections.
- `variant="dark"` — black bg, white text. For light/gradient backgrounds.

Sizes: `sm` and `md`.

### `.pill-gradient` + `.pill-gradient-upper` (CSS in globals.css)

Reusable gradient pill — replaced the old amber `.kicker` class in every section. Add `.pill-gradient-upper` for uppercase tracking, `.pill-gradient-button` for the larger Hero badge variant with icon.

### `.animated-border-card` (CSS in globals.css)

The PaywallMirror frame. Same pulse pattern as `CtaButton`. 2-px gradient border with `pulse-cta-border` keyframe + inner sheen with `pulse-cta-sheen`. Wraps `<div class="animated-border-card-inner">…</div>`.

### `.phone-mockup` (CSS in globals.css)

iPhone-style mockup frame. Side buttons are optional inner `.phone-button-left/right` divs. Used in Hero (2 stacked tilted phones) and HowItWorks (3 tilted phones in a row).

---

## Section structure (8 sections, top → bottom)

| # | Section | File | Job |
|---|---|---|---|
| 1 | Hero | `sections/Hero/index.tsx` | Hook + primary App Store CTA. Two tilted phones (static placeholder photos — swap later). |
| 2 | StatsStrip | `sections/StatsStrip/index.tsx` | 5 KPI tiles with citable sources → `/methodology`. |
| 3 | Features | `sections/Features/index.tsx` | V1 bento grid (big rotating card + mini-scroll + 2 small cards) + integrated `Pick a vibe` pose gallery (3 scrolling rows, slow 140 s). |
| 4 | HowItWorks | `sections/HowItWorks/index.tsx` | 3 tilted phones showing app-step screenshots + arrows. |
| 5 | BeforeAfter | `sections/BeforeAfter/index.tsx` | 3 pair crossfade cycle. BEFORE = mirror selfies, AFTER = polished poses. |
| 6 | Benefits | `sections/Benefits/index.tsx` | V1 6-icon grid with vertical gradient divider on desktop. |
| 7 | FAQ | `sections/FAQ/index.tsx` | Native `<details>` accordion. 6 male/AI/iOS-focused Q&A. |
| 8 | PaywallMirror | `sections/PaywallMirror/index.tsx` | Animated-border-card with `Be the right swipe.` headline + App Store badge. |

Removed sections (don't reintroduce without thought): `Testimonials` (fake social proof = legal risk), generic `CTA` card (merged into PaywallMirror), standalone `PoseGallery` (merged into Features).

**Responsive breakpoint strategy:**
- `< lg` (mobile/tablet): narrow `max-w-md` (448 px) mobile-app feel.
- `lg:` (≥ 1024 px): proper desktop wrappers (`max-w-5xl`/`6xl`), multi-column grids.

---

## Content sources

### Pose photos → Convex

Photos come from **Convex deployment `glad-spaniel-840`**, table `photoReferencePose`. To refresh:

```bash
# In an isolated dir (don't pollute package.json):
mkdir /tmp/convex-export && cd /tmp/convex-export
npm init -y && npm i convex
npx convex export --deployment glad-spaniel-840 --include-file-storage --path snapshot.zip
unzip snapshot.zip
```

Then re-run the categorization script (was inline in conversation; rebuild as needed) to copy files into `public/poses-v2/<category>/` and regenerate `lib/poses.ts`.

**Convex categories (5):** Business, Medium Shot, Pose, Selfie, Sitting. These are technical labels for pose references — they DON'T match what users see in the app feed.

**Marketing categories (display):** Tinder Hero · Date Night · Business · Casual · Outdoor · Golden hour · Custom uploads. Used in `Pick a vibe` chips and `300+ pro poses` copy. They're decorative labels, not strict filters.

**`lib/poses.ts`** is the auto-generated TypeScript manifest. Don't edit by hand — regenerate from Convex.

### BEFORE/AFTER images

The Convex `Selfie` category is editorial-quality polished poses (not raw amateur selfies). For authentic-looking BEFORE shots, we use 3 AI-generated mirror selfies in **`public/poses-v2/selfie-input/`**: `bathroom-bright.jpg`, `bathroom-athletic.jpg`, `elevator-mirror.jpg`. Replace these only with images that visually scream "user input phone selfie".

### Mobile app screenshots

`public/mobile-app/mobile-app-step-1.png` through `step-3.png`. Used in HowItWorks phone trio. Currently NOT used in Hero (cycling animation was removed — Hero now uses two static pose photos instead).

---

## Mobile-canonical copy (these are locked, don't drift)

- **Hero**: `She decided in 100 ms.` / `Before she even read your name. Pick from 300+ pro poses — or upload your own reference. AI does the rest.`
- **StatsStrip**: `First photo. First chance.` / `One swipe. One photo. One shot at making her stop scrolling.`
- **Features big card**: `Looks pro. Still you.` / `Real photo — not a filter.`
- **HowItWorks**: `It's easy. One, two, three.`
- **BeforeAfter**: `Instead of a photo shoot.` / `One selfie. ~30 seconds. Photos ready for your profile.`
- **Benefits**: `Everything you need. Nothing you don't.`
- **FAQ**: `Common questions.`
- **PaywallMirror**: `Be the right swipe.` / `One selfie. ~30 seconds. Pick from 300+ pro poses — or upload your own reference. AI photos that match what dating apps actually reward.`
- **Footer tagline**: `Pro photos. No photographer. One selfie. 300+ pro poses or your own reference. AI does the rest.`

Stats numbers + source labels (locked, citable, in `/methodology`):
- `2.5/sec · posts she scrolls past · SOCIAL MEDIA · 2025`
- `+38% · faces beat no-face posts · IMAGE-ENGAGEMENT · 2025`
- `+102% · forward-facing wins likes · HINGE · 2023`
- `+203% · more messages with full-body · MATCH · 2024`
- `+200% · matches with quality photos · HINGE · 2024`

Source labels stay UPPERCASE letter-spaced — they're attribution, not marketing.

---

## ⚠️ Legal flags — re-check before launch

These were removed during iteration but were originally flagged as mandatory in the prior audit. Re-evaluate before any production launch:

1. **FTC demo caption on BeforeAfter** — *"Demo. Your photos use your actual face and body. Results vary based on selfie quality, lighting, and pose."* Was removed per Marcin's request. Without it, FTC false-advertising substantiation leans entirely on `/privacy`. **Recommendation:** re-add at small italic below the cards, OR put equivalent disclosure visibly near the BeforeAfter section.

2. **Auto-renewal disclosure** — Apple App Store §3.1.2 + EU UCPD require this language visible at the purchase point. The full sentence (`Subscription automatically renews unless auto-renew is turned off at least 24 hours before the current period ends. Your iTunes account will be charged for renewal within 24 hours before each renewal. Manage or cancel in App Store account settings.`) used to live in the footer; was removed when we cleaned up pricing language. Apple's App Store listing covers it server-side, but landing-page-side it's worth re-adding a one-liner under the App Store badge.

3. **Stat substantiation** — every percentage links to `/methodology`. Don't add new stats without adding a citable source there. We don't claim individual user results, only research-backed industry averages.

4. **Biometric / AI data usage** — `/privacy#ai-data-usage` covers GDPR + BIPA + LDPA + CCPA. Linked from the footer.

5. **`Last updated` dates** — privacy/terms top + bottom timestamps are currently `June 17, 2026`. Update on any substantive change.

---

## Identified improvements (Tier 1 — high-impact, untouched)

These were prioritized but not shipped:

- **Sticky bottom mobile CTA bar** — fixed footer with App Store badge always visible. Recovers the lost top CTA on long scroll. Typical lift: 8–15 % installs.
- **App Store rating display** — once you have ratings, `★ 4.6 · 1,200 ratings` under the hero badge is the single highest-credibility signal a mobile app can show.
- **Inline transformation video / Lottie** — selfie → pro shot inside the hero phone mockup, replacing the static photo. Strongest hook for AI photo apps.
- **OG image regeneration** — `/og-image.png` is from an older design; bake a new 1200×630 with current branding and `Pro photos. No photographer.` headline.
- **Schema.org `MobileApplication`** structured data in `app/layout.tsx` for SEO app cards.

Tier 2 / Tier 3 — see conversation history if needed (use-case strip, founder note, AVIF/WebP conversion, etc.).

---

## Don't reintroduce

Mistakes from prior iterations that were intentionally removed:

- ❌ Fake testimonials with invented names ("Sarah M.", "James K.", "Emily R.") — FTC risk, also two of three were women.
- ❌ Female imagery anywhere in poses/gallery/hero/before-after.
- ❌ Specific dollar pricing on the page — `$4.99/week`, `$12.99/month`, `$44.99/6 months`. Pricing changes; App Store is authoritative.
- ❌ Generic "Why you'll love WinkyPie" copy with no mobile counterpart.
- ❌ Hardcoded category lists in components — categories should be data-driven from `lib/poses.ts` for technical categories, hardcoded array for marketing categories.

---

## Quick file map

```
app/
├── layout.tsx          # Inter + Fraunces fonts, metadata, providers
├── page.tsx            # 8 sections wired in order
├── globals.css         # Brand tokens, pill-gradient, pulse-cta, phone-mockup, animated-border-card
├── methodology/        # Stat sources page
├── privacy/            # GDPR + BIPA + CCPA boilerplate
├── terms/              # Apple + AI Act + TAKE IT DOWN compliance
└── support/            # Contact form

components/
├── layout/
│   ├── Header/         # Logo + nav (lg) + App Store badge (lg)
│   └── Footer/         # V1 4-col grid: brand · Legal · Follow Us
├── sections/           # 8 sections (Hero, StatsStrip, Features, HowItWorks, BeforeAfter, Benefits, FAQ, PaywallMirror)
└── ui/
    ├── CtaButton/      # PulseGradientCta from mobile app
    ├── AppStoreBadge/  # light/dark variants
    ├── CookieBanner/
    ├── AnimateOnScroll/
    ├── GoogleAnalytics/
    └── MetaPixel/

lib/
├── poses.ts            # Auto-generated from Convex glad-spaniel-840
├── gtag.ts             # GA4 event helpers (trackDownloadClick)
└── cookies.ts          # Consent cookie helpers

public/
├── poses-v2/           # AI-generated pose references from Convex
│   ├── business/
│   ├── medium-shot/
│   ├── pose/
│   ├── selfie/
│   ├── sitting/
│   └── selfie-input/   # 3 mirror selfies for BEFORE shots
├── mobile-app/         # 3 mobile app step screenshots (HowItWorks)
└── logo.png            # WinkyPie brand mark
```
