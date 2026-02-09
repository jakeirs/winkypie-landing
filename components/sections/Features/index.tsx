import Image from 'next/image'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'One Selfie Is Enough',
    description: 'Upload a single selfie and unlock unlimited pose possibilities. No need for endless photo shoots.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: '100+ Pro Poses',
    description: 'Choose from our curated library of professional poses. Sitting, standing, business, casual - we have it all.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant AI Generation',
    description: 'Our advanced AI transforms your selfie into professional photos in seconds. Real-time, realistic results.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: '100% Private',
    description: 'Your photos never leave your device. Everything is processed and stored locally. Your privacy is guaranteed.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Create your <span className="gradient-text">Pro Photo</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Professional photos without the professional price tag. Everything you need to look your best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="gradient-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Pick a pose, own the spotlight
                </h3>
                <p className="text-muted mb-6">
                  Browse through our extensive collection of professional poses.
                  Whether you need a LinkedIn headshot or a casual Instagram photo,
                  WinkyPie has you covered.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Sitting</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Standing</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Business</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Casual</span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Creative</span>
                </div>
              </div>
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src="/sample.jpg"
                  alt="Pose selection preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
