# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 landing page with **React 19**, **Tailwind CSS 4**, **TypeScript**, and **App Router**. Professional component architecture with path aliases.

## Key Dependencies

- **Next.js**: 16.1.4 | **React**: 19.2.3
- **Tailwind CSS**: 4 (new `@import "tailwindcss"` syntax)
- **TypeScript**: 5 | **ESLint**: 9

## Commands

```bash
npm run dev      # Development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

## Path Alias System

| Alias | Path       | Usage               |
| ----- | ---------- | ------------------- |
| `@/*` | `./` (root) | All project imports |

**Configured in:** `tsconfig.json`

**Usage:**
```typescript
// ✅ Correct usage
import Button from '@/components/ui/Button/Button'
import { Hero } from '@/components/sections/Hero'
import { useAnimation } from '@/hooks/useAnimation'
import { User } from '@/types'

// ❌ Avoid relative imports for shared code
import Button from '../../../components/ui/Button/Button'
```

## Import Order Standards (React 19+)

**CRITICAL:** No React import needed since React 19+. Follow this exact order:

```typescript
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import { motion } from 'framer-motion'

import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import Button from '@/components/ui/Button/Button'
import Card from '@/components/ui/Card/Card'

import { useAnimation } from '@/hooks/useAnimation'

import { cn } from '@/lib/utils'
import { SITE_CONFIG } from '@/constants'
import { User } from '@/types'
```

**Import Order Rules:**
- **NO React import** required (React 19+ automatic)
- **NEVER add comments** in import blocks
- **One blank line** between major categories
- **Import Categories** (in order):
  1. Next.js built-ins (next/image, next/link, next/navigation)
  2. Third-party libraries (node_modules)
  3. Section components (@/components/sections)
  4. UI components (@/components/ui)
  5. Hooks (@/hooks)
  6. Utilities (@/lib)
  7. Constants (@/constants)
  8. Types (@/types)

## 🎯 React 19 Patterns

### Ref-as-a-Prop Pattern

**✅ NEW (React 19+):**
```typescript
function Button({ children, buttonRef }: { children: React.ReactNode; buttonRef?: React.Ref<HTMLButtonElement> }) {
  return <button ref={buttonRef}>{children}</button>
}
```

**❌ DEPRECATED:** `forwardRef` - Don't use for new components in React 19+

### Server Components (Default)

All components in `app/` are Server Components by default:

```typescript
// app/page.tsx - Server Component (default)
export default function Home() {
  return <div>Server rendered</div>
}
```

### Client Components

Add `'use client'` directive when using:
- `useState`, `useEffect`, `useRef` hooks
- Browser APIs (`window`, `document`)
- Event handlers (`onClick`, `onChange`)
- Third-party client libraries

```typescript
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

## 🎨 Tailwind CSS 4

**Import syntax** (globals.css):
```css
@import "tailwindcss";
```

**Theme configuration** using CSS custom properties:
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

**Dark mode** via `prefers-color-scheme` or class-based:
```typescript
<div className="bg-white dark:bg-black text-black dark:text-white">
```

## 🗂️ Professional Folder Structure

```
winky-pie-landing-page/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Root layout with fonts & metadata
│   ├── page.tsx                   # Home page (imports from components)
│   ├── globals.css                # Global styles + Tailwind
│   └── [route]/                   # Dynamic routes
│       └── page.tsx               # Route page
│
├── components/                    # Component Architecture
│   ├── ui/                        # Reusable UI Components
│   │   ├── Button/
│   │   │   └── Button.tsx         # Default export
│   │   ├── Card/
│   │   │   └── Card.tsx           # Default export
│   │   └── Input/
│   │       └── Input.tsx          # Default export
│   │
│   ├── sections/                  # Page Sections (landing page blocks)
│   │   ├── Hero/
│   │   │   ├── index.tsx          # Main section component
│   │   │   ├── components/        # Section-specific sub-components
│   │   │   └── types.ts           # Section-specific types
│   │   ├── Features/
│   │   ├── Pricing/
│   │   └── Footer/
│   │
│   └── layout/                    # Layout Components
│       ├── Header/
│       └── Navigation/
│
├── hooks/                         # Global custom hooks
├── lib/                           # Utility functions
├── types/                         # TypeScript interfaces
├── constants/                     # App constants
├── public/                        # Static assets
└── package.json
```

## 📋 Developer Guidelines

### 1. Single Responsibility for Route Files

**Rule:** Each `app/` route file should be minimal - import and render page component

**✅ Correct:**
```typescript
// app/page.tsx
import { HomePage } from '@/components/sections/HomePage'

export default function Home() {
  return <HomePage />
}
```

**❌ Incorrect:**
```typescript
// app/page.tsx - DON'T put business logic here
import Image from 'next/image'
// ... lots of component logic, state, handlers
```

### 2. UI Component Organization

- **Location:** `components/ui/`
- **Structure:** Each component in its own folder with default export
- **No index files** in UI component folders
- **Direct imports:** `@/components/ui/Button/Button`

```
components/ui/
├── Button/
│   └── Button.tsx         # export default function Button()
├── Card/
│   └── Card.tsx           # export default function Card()
└── Input/
    └── Input.tsx          # export default function Input()
```

### 3. Section Component Organization

- **Location:** `components/sections/`
- **Structure:** Index file with named exports
- **For landing page blocks:** Hero, Features, Pricing, CTA, Footer

```
components/sections/
├── Hero/
│   ├── index.tsx          # export function Hero()
│   ├── components/        # HeroTitle, HeroImage, etc.
│   └── types.ts           # HeroProps, etc.
```

### 4. next/image Best Practices

**Always use `next/image`** for optimized images:

```typescript
import Image from 'next/image'

// ✅ Correct - with dimensions
<Image
  src="/hero.png"
  alt="Hero image"
  width={800}
  height={600}
  priority  // For above-the-fold images
/>

// ✅ Correct - fill mode with container
<div className="relative w-full h-64">
  <Image
    src="/background.jpg"
    alt="Background"
    fill
    className="object-cover"
  />
</div>

// ❌ Don't use regular img tags
<img src="/hero.png" alt="Hero" />
```

### 5. Link Component

**Use `next/link`** for internal navigation:

```typescript
import Link from 'next/link'

// ✅ Correct
<Link href="/about" className="text-blue-600 hover:underline">
  About
</Link>

// ✅ With scroll behavior
<Link href="#features" scroll={false}>
  Features
</Link>

// ❌ Don't use anchor tags for internal links
<a href="/about">About</a>
```

## 🚀 Metadata & SEO

**Root layout metadata:**
```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Winky Pie | Landing Page',
  description: 'Your product description',
  openGraph: {
    title: 'Winky Pie',
    description: 'Your product description',
    images: ['/og-image.png'],
  },
}
```

**Per-page metadata:**
```typescript
// app/about/page.tsx
export const metadata: Metadata = {
  title: 'About | Winky Pie',
  description: 'About page description',
}
```

## Development Rules

### ✅ DO:

- Use Server Components by default
- Add `'use client'` only when necessary
- Use `next/image` for all images
- Use `next/link` for internal navigation
- Keep route files minimal (single import pattern)
- Use path aliases consistently (`@/`)
- Use Tailwind CSS 4 syntax
- Follow import order standards

### ❌ DON'T:

- Put business logic in `app/` route files
- Use relative imports for shared code
- Use `<img>` tags (use `next/image`)
- Use `<a>` tags for internal links (use `next/link`)
- Import React explicitly (React 19+ automatic)
- Use `forwardRef` (use ref-as-a-prop pattern)
- Create index files in `components/ui/` folders

## Quick Reference

**Essential Commands:**
```bash
npm run dev      # Start development
npm run build    # Build for production
npm run lint     # Check code quality
```

**Key Files:**
- `app/layout.tsx` - Root layout, fonts, metadata
- `app/page.tsx` - Home page entry
- `app/globals.css` - Global styles + Tailwind config
- `tsconfig.json` - TypeScript + path aliases
- `next.config.ts` - Next.js configuration

**Success Checklist:**
- [ ] App starts on localhost:3000 without errors
- [ ] No console errors
- [ ] Images use `next/image`
- [ ] Links use `next/link`
- [ ] Client components have `'use client'` directive
- [ ] Code passes linting
