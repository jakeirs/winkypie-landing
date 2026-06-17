import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

import { Hero } from '@/components/sections/Hero'
import { UseCases } from '@/components/sections/UseCases'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { Features } from '@/components/sections/Features'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { Benefits } from '@/components/sections/Benefits'
import { FAQ } from '@/components/sections/FAQ'
import { PaywallMirror } from '@/components/sections/PaywallMirror'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <UseCases />
        <StatsStrip />
        <Features />
        <HowItWorks />
        <BeforeAfter />
        <Benefits />
        <FAQ />
        <PaywallMirror />
      </main>
      <Footer />
    </>
  )
}
