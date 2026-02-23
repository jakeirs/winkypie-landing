import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Content Creator',
    content: 'WinkyPie saved me so much time and money. I used to spend hours on photo shoots, now I get professional results in seconds!',
    rating: 5,
  },
  {
    name: 'James K.',
    role: 'Business Professional',
    content: 'Finally updated my LinkedIn photo without booking an expensive photographer. The AI results are incredibly realistic.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    role: 'Influencer',
    content: 'I love that my photos stay on my device. Privacy is important to me, and WinkyPie delivers amazing results without compromising it.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Built for <span className="gradient-text">everyone</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Professional photos in seconds — no photographer, no studio, no hassle.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 120}>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted mb-6">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-muted">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm">On-Device Privacy</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">Instant</div>
              <div className="text-sm">Results</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">Free</div>
              <div className="text-sm">To Get Started</div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
