'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

const faqs = [
  {
    question: 'How does WinkyPie work?',
    answer: 'WinkyPie uses advanced AI to transform your selfie into professional photos. Simply upload a selfie, choose a pose from our library, and our AI will generate a realistic photo of you in that pose. The entire process takes just seconds.',
  },
  {
    question: 'Is my data private and secure?',
    answer: 'Absolutely! Your privacy is our top priority. All photos are processed and stored locally on your device. We never upload, access, or share your images with anyone. Your photos remain yours and yours alone.',
  },
  {
    question: 'How many photos can I generate?',
    answer: 'The free version allows you to generate a limited number of photos to try out the app. With our premium plans (Weekly, Monthly, or Yearly), you get access to unlimited generations and our full library of 500+ professional poses.',
  },
  {
    question: 'What kind of poses are available?',
    answer: 'We offer a diverse collection of 500+ professional poses including sitting, standing, business professional, casual, creative, and more. Whether you need a LinkedIn headshot, dating profile photo, or Instagram-worthy shot, we have you covered.',
  },
  {
    question: 'How realistic are the generated photos?',
    answer: 'Our AI is trained on millions of photos to produce highly realistic results. The generated photos maintain your facial features, skin tone, and likeness while placing you naturally in the selected pose. Most people can\'t tell the difference!',
  },
  {
    question: 'Can I use the photos commercially?',
    answer: 'Yes! Photos generated with WinkyPie are yours to use however you like — on social media, professional profiles, portfolios, and more. Just make sure you have the rights to the original selfie you upload.',
  },
]

function FAQItem({ faq, isOpen, onToggle }: {
  faq: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [])

  useEffect(() => {
    updateHeight()
  }, [isOpen, updateHeight])

  return (
    <div
      className={`rounded-3xl bg-card border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-primary/30 shadow-[0_0_40px_-12px] shadow-primary/10'
          : 'border-border hover:border-border/80'
      }`}
    >
      <button
        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
        onClick={onToggle}
      >
        <span className={`font-semibold transition-colors duration-300 ${isOpen ? 'text-white' : ''}`}>
          {faq.question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-linear-to-br from-primary to-secondary text-white rotate-180'
            : 'bg-card-hover text-muted'
        }`}>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className="transition-all duration-300 ease-in-out"
        style={{ height: isOpen ? height : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div ref={contentRef}>
          <div className="px-6 pb-6">
            <p className="text-muted leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/3 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Got questions?{' '}
              <span className="gradient-text">We&apos;ve got answers</span>
            </h2>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about WinkyPie.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
