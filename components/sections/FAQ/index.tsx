'use client'

import { useState } from 'react'

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
    answer: 'The free version allows you to generate a limited number of photos to try out the app. With our premium plans (Weekly, Monthly, or Yearly), you get access to unlimited generations and our full library of 100+ professional poses.',
  },
  {
    question: 'What kind of poses are available?',
    answer: 'We offer a diverse collection of 100+ professional poses including sitting, standing, business professional, casual, creative, and more. Whether you need a LinkedIn headshot, dating profile photo, or Instagram-worthy shot, we have you covered.',
  },
  {
    question: 'How realistic are the generated photos?',
    answer: 'Our AI is trained on millions of photos to produce highly realistic results. The generated photos maintain your facial features, skin tone, and likeness while placing you naturally in the selected pose. Most people can\'t tell the difference!',
  },
  {
    question: 'Can I use the photos commercially?',
    answer: 'Yes! Photos generated with WinkyPie are yours to use however you like - on social media, professional profiles, portfolios, and more. Just make sure you have the rights to the original selfie you upload.',
  },
  {
    question: 'What devices are supported?',
    answer: 'WinkyPie is available on both iOS and Android devices. We\'re constantly updating the app to support the latest devices and operating system versions.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 bg-card/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted">
            Everything you need to know about WinkyPie.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-card border border-border overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-muted transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
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
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
