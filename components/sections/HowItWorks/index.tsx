import Image from 'next/image'

import AnimateOnScroll from '@/components/ui/AnimateOnScroll/AnimateOnScroll'

const steps = [
  {
    number: '01',
    title: 'Upload your selfie',
    description: 'Take a quick selfie or choose from your gallery. One photo is all you need.',
    image: '/sample.jpg',
    imageAlt: 'Upload selfie step',
    tilt: '-rotate-3',
  },
  {
    number: '02',
    title: 'Pick a pose',
    description: 'Browse 100+ professional poses and select the one that fits your vibe.',
    image: '/poses/cat-2__outdoor_knee-up_subtle-smile_day_eye-contact.jpg',
    imageAlt: 'Pick a pose step',
    tilt: 'rotate-0',
  },
  {
    number: '03',
    title: 'Get your photo',
    description: 'Hit generate and watch AI create your professional photo in seconds.',
    image: '/poses/cat-4__eye-contact_park_outdoor_eye-contact.jpg',
    imageAlt: 'Generated result step',
    tilt: 'rotate-3',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              It&apos;s easy as <span className="gradient-text">1-2-3</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              No complicated setup. No learning curve. Just three simple steps to your perfect photo.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} animation={index === 0 ? 'fade-left' : index === 2 ? 'fade-right' : 'fade-up'} delay={index * 150}>
              <div className="relative flex flex-col items-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl lg:text-6xl font-bold gradient-text leading-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-muted text-center text-sm lg:text-base mb-8 max-w-70">{step.description}</p>

                <div className={`${step.tilt} transition-transform duration-500 hover:rotate-0`}>
                  <div className="phone-mockup">
                    <div className="phone-screen w-50 h-100 sm:w-55 sm:h-110 relative">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-13 left-[65%] w-[70%] items-center">
                    <div className="w-full h-0.5 bg-linear-to-r from-primary/60 to-secondary/60" />
                    <svg className="w-4 h-4 -ml-1 text-secondary/60 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                    </svg>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
