import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'
import { FaqStructuredData } from '@/components/ui/StructuredData/StructuredData'

export const faqs = [
  {
    question: 'How does the AI actually work?',
    answer:
      'You upload one selfie and pick a pose from the library. The AI preserves your facial features and body proportions, then renders you in that pose with realistic lighting and styling.',
  },
  {
    question: 'How realistic do the photos look?',
    answer:
      'They\'re stylized AI representations, not perfect clones. The AI keeps your face and build recognizable. Results depend on selfie quality, lighting, and the pose you pick — closer mirroring of the reference angle yields stronger results.',
  },
  {
    question: 'What happens to my selfie?',
    answer:
      'Your selfie is sent over an encrypted connection to the AI service for generation only. It is automatically deleted from servers within 7 days and never used to train AI models. Generated photos are saved locally on your iPhone.',
  },
  {
    question: 'What if I don\'t like a result?',
    answer:
      'Pick a different pose or retake the selfie. With our pro collection spanning Selfie, Pose, Medium Shot, Sitting, and Business categories — or upload your own reference photo from anywhere — the right shot is usually a couple of tries away.',
  },
  {
    question: 'How does the trial and cancellation work?',
    answer:
      'You get a free trial, then a paid subscription auto-renews through your Apple ID. Current pricing is shown in the app and on the App Store listing. Cancel anytime in App Store → your profile → Subscriptions. Apple notifies you before any charge.',
  },
  {
    question: 'Is it only for iPhone?',
    answer:
      'Yes — WinkyPie is iOS only right now. Download from the App Store. An Android version is on the roadmap.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-10 lg:py-16">
      <FaqStructuredData faqs={[...faqs]} />
      <div className="max-w-md lg:max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-8 lg:mb-14">
            <div className="flex justify-center mb-4">
              <span className="pill-gradient pill-gradient-upper">Questions</span>
            </div>
            <h2 className="font-serif text-white text-[28px] sm:text-[32px] lg:text-[44px] leading-[1.1] font-semibold tracking-tight">
              Common <em className="gradient-text">questions</em>.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-2.5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={faq.question} animation="fade-up" delay={i * 60}>
              <details className="group rounded-2xl border border-white/12 bg-white/[0.03] open:bg-white/[0.05] open:border-white/20 transition-colors h-full">
                <summary className="flex items-center justify-between gap-3 cursor-pointer list-none px-4 lg:px-5 py-4 lg:py-5">
                  <span className="text-[14px] sm:text-[15px] lg:text-[15.5px] font-semibold text-white pr-1">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-7 h-7 rounded-full bg-white/[0.06] border border-white/12 flex items-center justify-center text-white/70 group-open:bg-gradient-to-br group-open:from-[color:var(--brand-cta)] group-open:to-[color:var(--brand-cta-secondary)] group-open:text-white group-open:border-transparent transition-all"
                  >
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 lg:px-5 pb-4 lg:pb-5 -mt-1 text-[13px] lg:text-[14px] leading-relaxed text-white/75">
                  {faq.answer}
                </div>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
