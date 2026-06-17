import type { Metadata } from 'next'

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

export const metadata: Metadata = {
  title: 'Sources & Methodology | WinkyPie',
  description:
    'Every statistic referenced on WinkyPie comes from publicly cited industry research, peer-reviewed psychology studies, or aggregated dating-platform data.',
}

export default function MethodologyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4">
        <article className="max-w-2xl mx-auto legal-content">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-3">
            Sources &amp; Methodology
          </h1>
          <p>
            We don&apos;t make up numbers. Every statistic referenced on this site and inside
            the WinkyPie app comes from publicly cited industry research, peer-reviewed
            psychology studies, or aggregated dating-platform data.
          </p>

          <h2>First impression speed</h2>
          <p>
            <strong>100 ms — first impression formed from a face.</strong>
            <br />
            <em>
              Willis, J., &amp; Todorov, A. (2006). First Impressions: Making up your mind
              after a 100-ms exposure to a face.{' '}
              <a
                href="https://doi.org/10.1111/j.1467-9280.2006.01750.x"
                target="_blank"
                rel="noopener noreferrer"
              >
                Psychological Science, 17(7), 592–598.
              </a>
            </em>
          </p>

          <h2>Scroll speed</h2>
          <p>
            <strong>2.5 posts per second — typical social-feed scroll rate.</strong>
            <br />
            <em>
              SQ Magazine, Social Media Attention Span Statistics 2025.{' '}
              <a
                href="https://sqmagazine.co.uk/social-media-attention-span-statistics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                sqmagazine.co.uk
              </a>
            </em>
          </p>

          <h2>Face vs no-face engagement</h2>
          <p>
            <strong>+38% — image posts with faces vs no faces.</strong>
            <br />
            <em>
              Aggregated social-media image-engagement studies, 2025. For the specific
              study reference, email{' '}
              <a href="mailto:privacy@winkypie.app">privacy@winkypie.app</a>.
            </em>
          </p>

          <h2>Forward-facing photos</h2>
          <p>
            <strong>+102% more likes — forward-facing vs side-angle headshots.</strong>
            <br />
            <em>Hinge data, 2023, aggregated by VIDA Select.</em>
          </p>

          <h2>Full-body messages</h2>
          <p>
            <strong>
              +203% more messages — profiles with a full-body shot.
            </strong>
            <br />
            <em>Match.com profile engagement data, 2024 (aggregated).</em>
          </p>

          <h2>Quality vs amateur photos</h2>
          <p>
            <strong>+200% more matches — quality vs amateur photos.</strong>
            <br />
            <em>Hinge profile data, 2024 (aggregated).</em>
          </p>

          <h2>Photos that hurt</h2>
          <ul>
            <li>
              <strong>−90%</strong> — Snapchat-filter photos <em>(Hinge data, 2023)</em>
            </li>
            <li>
              <strong>72%</strong> rate bathroom selfies undesirable{' '}
              <em>(The Match Lab survey, 2023)</em>
            </li>
            <li>
              Only <strong>13%</strong> of successful Hinge profiles use mirror selfies{' '}
              <em>(Hinge data, 2023)</em>
            </li>
          </ul>

          <h2>Methodology note</h2>
          <p>
            Statistics describe what works on dating apps in general, based on platform
            analytics and behavioral research. They are not guarantees that any individual
            WinkyPie user will see these results. Outcomes depend on profile quality,
            photo quality, demographics, and the platform&apos;s matching algorithm.
          </p>

          <h2>Contact</h2>
          <p>
            For full citations, methodology questions, or to report a stat we got wrong:{' '}
            <a href="mailto:privacy@winkypie.app">privacy@winkypie.app</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
