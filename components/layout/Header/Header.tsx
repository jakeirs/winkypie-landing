import Image from 'next/image'
import Link from 'next/link'

import AppStoreBadge from '@/components/ui/AppStoreBadge/AppStoreBadge'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-center lg:justify-between h-14 lg:h-16">
          <Link href="/" className="flex items-center gap-2 lg:gap-2.5">
            <Image
              src="/logo.png"
              alt="WinkyPie"
              width={32}
              height={32}
              className="rounded-lg w-7 h-7 lg:w-8 lg:h-8"
              priority
            />
            <span className="text-base lg:text-lg font-semibold tracking-tight">
              WinkyPie
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[14px] text-white/70">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#how" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden lg:block">
            <AppStoreBadge trackingLabel="header_badge" size="sm" />
          </div>
        </div>
      </div>
    </header>
  )
}
