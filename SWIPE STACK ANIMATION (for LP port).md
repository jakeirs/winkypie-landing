# SwipeStack Animation — spec for Next.js landing page port

> Source of truth: `components/PAGE/onboarding-v5/components/SwipeStack.tsx` (RN).
> This is the "Tinder-like" card animation from step 1 of onboarding — dating-photo card cycling with LIKE/NOPE stamps. Below is a 1:1 spec for porting to a Next.js LP.

## Koncept

Karta wielkości ~78% szerokości kontenera pokazuje **na zmianę**:

1. zdjęcie z pieczątką **NOPE** (czerwona, obrócona `-18°`, lewy górny róg)
2. zdjęcie z pieczątką **LIKE** (zielona, obrócona `+18°`, prawy górny róg)

Nie ma faktycznego swipe'a. To **cover-overlay crossfade**: solidna warstwa w kolorze tła zakrywa i odsłania zdjęcie. Dzięki temu na iOS/mobile nie ma białego blinka od lazy decoding — nowa karta commit-uje source pod zakrytą warstwą, potem uncover.

## Rytm (state machine per karta)

Cztery timery liczą od punktu w którym karta wchodzi:

| Faza | t (ms) | Co się dzieje |
|---|---|---|
| **Reveal** | `0 → FADE_MS` | cover animuje opacity `1 → 0` (easing: `out-cubic`), zdjęcie się odsłania |
| **Hold** | `FADE_MS → FADE_MS + HOLD_MS - STAMP_MS` | zdjęcie widoczne, stamp jeszcze niewidoczny |
| **Stamp in** | `FADE_MS + HOLD_MS - STAMP_MS → FADE_MS + HOLD_MS` | stamp opacity `0 → 1` (linear/timing) |
| **Hide** | `FADE_MS + HOLD_MS → FADE_MS + HOLD_MS + FADE_MS` | cover `0 → 1` (easing: `in-cubic`), zdjęcie znika pod cover; stamp opacity `1 → 0` (200ms) |
| **Advance** | `FADE_MS + HOLD_MS + FADE_MS + GAP_MS` | `setIndex(i => (i + 1) % cards.length)` — swap source pod pełnym cover, następny effect run robi reveal dla nowej karty |

**Stałe (w milisekundach):**

```ts
const HOLD_MS  = 1400   // czas w którym zdjęcie jest widoczne (bez animacji)
const FADE_MS  = 650    // fade-in/fade-out cover
const STAMP_MS = 280    // fade-in stampu
const GAP_MS   = 30     // przerwa między cyklami (żeby swap sourca był pod pełnym coverem)
```

Cykl na kartę = `FADE_MS + HOLD_MS + FADE_MS + GAP_MS = 2730 ms`.

## Dane (kolejność)

Dwie tablice zdjęć: `good[]` i `bad[]`. Zipujemy je naprzemiennie — `bad[0], good[0], bad[1], good[1], ...`:

```ts
type CardKind = 'bad' | 'good'
interface SwipeCard { kind: CardKind; src: string }

const cards: SwipeCard[] = []
for (let i = 0; i < Math.max(bad.length, good.length); i++) {
  if (bad[i])  cards.push({ kind: 'bad',  src: bad[i]  })
  if (good[i]) cards.push({ kind: 'good', src: good[i] })
}
```

Każdy `NOPE` (bad) jest po nim `LIKE` (good) — konsystentny rytm "co robić / czego nie robić".

## Wygląd

**Karta:**

- `width: 78%` szerokości parenta
- `aspect-ratio: 0.72` (portret)
- `border-radius: 28px`
- `box-shadow: 0 10px 18px rgba(0,0,0,0.45)`
- `background: #1A1A1A` (surface, na wypadek gdyby image się nie zdekodował jeszcze)
- `overflow: hidden`

**Cover (warstwa nad zdjęciem):**

- absolute inset-0
- `background: #0E0E0E` (identyczny kolor jak tło strony — kluczowe, inaczej widać krawędź)
- animowany opacity zgodnie z rytmem

**Stamp (LIKE / NOPE):**

- absolute, `top: 28px`
- padding: `8px 16px`
- `border: 4px solid <color>`
- `border-radius: 10px`
- `background: rgba(10,10,10,0.35)` (lekko przyciemniony, żeby czytało się na jasnych fotach)
- text: `letter-spacing: 4px`, `font-size: 28px`, bold, sans-serif
- pointer-events: none

**LIKE** (kind === 'good'):

- `right: 18px`
- `transform: rotate(18deg)`
- border + text color: `#22c55e` (zielony, tailwind emerald-500)
- napis: `LIKE`

**NOPE** (kind === 'bad'):

- `left: 18px`
- `transform: rotate(-18deg)`
- border + text color: `#ef4444` (czerwony, tailwind red-500)
- napis: `NOPE`

## Implementacja w Next.js (React) — 2 warianty

### Wariant A — framer-motion (rekomendowany)

```tsx
'use client'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const HOLD_MS = 1400, FADE_MS = 650, STAMP_MS = 280, GAP_MS = 30

type Card = { kind: 'good' | 'bad'; src: string }

export function SwipeStack({ cards }: { cards: Card[] }) {
  const [index, setIndex] = useState(0)
  const cover = useAnimationControls()
  const stamp = useAnimationControls()

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      // Start with cover fully opaque
      await cover.set({ opacity: 1 })
      await stamp.set({ opacity: 0 })

      // 1. Reveal
      await cover.start({ opacity: 0, transition: { duration: FADE_MS/1000, ease: [0.33,1,0.68,1] } })
      if (cancelled) return

      // 2. Wait until it's time for the stamp
      await new Promise(r => setTimeout(r, HOLD_MS - STAMP_MS))
      if (cancelled) return
      await stamp.start({ opacity: 1, transition: { duration: STAMP_MS/1000 } })
      if (cancelled) return

      // 3. Hide (cover back + stamp out)
      await Promise.all([
        cover.start({ opacity: 1, transition: { duration: FADE_MS/1000, ease: [0.32,0,0.67,0] } }),
        stamp.start({ opacity: 0, transition: { duration: 0.2 } }),
      ])
      if (cancelled) return

      // 4. Advance under full cover
      await new Promise(r => setTimeout(r, GAP_MS))
      if (cancelled) return
      setIndex(i => (i + 1) % cards.length)
    }
    run()
    return () => { cancelled = true }
  }, [index, cards, cover, stamp])

  const card = cards[index]
  const isGood = card.kind === 'good'

  return (
    <div className="relative w-[78%] aspect-[0.72] rounded-[28px] overflow-hidden shadow-[0_10px_18px_rgba(0,0,0,0.45)] bg-[#1a1a1a]">
      <Image src={card.src} alt="" fill className="object-cover" priority />
      <motion.div animate={cover} className="absolute inset-0 bg-[#0E0E0E]" />

      <motion.div
        animate={stamp}
        style={{ opacity: 0 }}
        className={`absolute top-7 px-4 py-2 rounded-[10px] border-4 bg-black/35 pointer-events-none
          ${isGood ? 'right-[18px] rotate-[18deg] border-emerald-500' : 'left-[18px] -rotate-[18deg] border-red-500'}`}>
        <span className={`font-bold text-[28px] tracking-[4px] ${isGood ? 'text-emerald-500' : 'text-red-500'}`}>
          {isGood ? 'LIKE' : 'NOPE'}
        </span>
      </motion.div>
    </div>
  )
}
```

### Wariant B — CSS keyframes (bez JS animacji, tylko zmiana indexu w JS)

Jeden `@keyframes` na cover, drugi na stamp, oba z takim samym `animation-duration = 2730ms` i `animation-iteration-count: infinite`. Wtedy setInterval co 2730ms zmienia `index`. Prostsze ale mniej precyzyjne timings.

```css
@keyframes cover {
  0%             { opacity: 1; }
  23.8%          { opacity: 0; }  /* FADE_MS / cycle */
  75.1%          { opacity: 0; }  /* (FADE_MS + HOLD_MS) / cycle */
  98.9%          { opacity: 1; }  /* (FADE_MS + HOLD_MS + FADE_MS) / cycle */
  100%           { opacity: 1; }
}
@keyframes stamp {
  0%             { opacity: 0; }
  64.9%          { opacity: 0; }  /* (FADE_MS + HOLD_MS - STAMP_MS) / cycle */
  75.1%          { opacity: 1; }  /* (FADE_MS + HOLD_MS) / cycle */
  82.4%          { opacity: 0; }  /* 200ms po hide start */
  100%           { opacity: 0; }
}
```

## Gotcha'y (żeby nie stracić czasu)

1. **Cover MUSI być dokładnie w kolorze tła strony** — inaczej widać ostry brzeg karty pod cover'em. Na Next.js landing page ustawcie zmienną CSS `--bg` i użyjcie jej w obu miejscach.
2. **Preload zdjęć** — na LP `next/image` z `priority` na pierwszej karcie, reszta lazy jest OK bo mamy 2.7s żeby zdekodować. Bez `priority` pierwsza karta miga na białym.
3. **`useEffect` cleanup jest kluczowy** — bez `cancelled` flag pending promises po unmount ustawiają state → warning + potencjalnie double-advance.
4. **Timings są nieprzypadkowe** — 2.7s / karta to sweet spot: krótsze = user nie zdąży przeczytać stampu, dłuższe = nudne. Nie zmieniać bez A/B.
5. **Aspect ratio 0.72** = portret bliski Tindera (który ma ~0.75). Zmiana psuje geometrię stampu (kąt obrotu przestaje dobrze siadać).
6. **Rotacja stampu 18°** dobrana tak żeby stamp miał wystający róg poza kartę (visually "przypięty do zdjęcia") ale nie za daleko poza kontener. Nie zmieniać bez powodu.
