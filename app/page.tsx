import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

import { Hero } from '@/components/sections/Hero'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Benefits } from '@/components/sections/Benefits'
import { FAQ } from '@/components/sections/FAQ'
import { PaywallMirror } from '@/components/sections/PaywallMirror'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <StatsStrip />
        <Features />
        <HowItWorks />
        <Benefits />
        <FAQ />
        <PaywallMirror />
      </main>
      <Footer />
    </>
  )
}
