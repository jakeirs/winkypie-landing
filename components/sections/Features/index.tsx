'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const heroPhotos = [
  '/poses/cat-4__portrait_smiling_over-the_shoulder.jpg',
  '/poses/cat-3__hand-in-pocket_outdoor_black-door_eye-contact_confident.jpg',
  '/poses/cat-1__car_golden-hours_tshirt.jpg',
  '/poses/cat-2__coffee_eyes-closed_face-to-sun_outdoor.jpg',
  '/poses/cat-4__boat_outdoor_sunny-white-top-direct-gaze.jpg',
  '/poses/m-cat-3__urban-street_over-the-shoulder_golden-hour_walking-away.jpg',
]

const galleryRow1 = [
  '/poses/cat-1__car_golden-hours_tshirt.jpg',
  '/poses/m-cat-1__car-interior_casual-selfie_confident-smirk_natural-sunlight_high-contrast.jpg',
  '/poses/cat-2__coffee_eyes-closed_face-to-sun_outdoor.jpg',
  '/poses/cat-3__hand-in-pocket_outdoor_black-door_eye-contact_confident.jpg',
  '/poses/m-cat-2__urban-balcony_seated-leg-cross_cheerful-and-spontaneous_cream-corduroy-jacket_diffused-natural-light.jpg',
  '/poses/cat-4__boat_outdoor_sunny-white-top-direct-gaze.jpg',
  '/poses/cat-5__sitting_eye-contact_business_mid-shot.jpg',
  '/poses/m-cat-3__urban-street_over-the-shoulder_golden-hour_walking-away.jpg',
  '/poses/cat-1__sunglasses_outside.jpg',
  '/poses/cat-2__indirect-gaze_hand-on-chin_crossed-legs.jpg',
  '/poses/m-cat-4__mediterranean-alleyway_casual-stroll-lean_high-contrast-sunlight_unbuttoned-shirt_vacation-mood.jpg',
  '/poses/cat-3__leaning-on-wall_outdoor_urban_indirect-gaze_confident_hand-in-hair.jpg',
  '/poses/cat-4__turtle-neck_hand-to-chin_elegant_indoor_indirect-gaze.jpg',
  '/poses/m-cat-5__studio-portrait_arms-crossed-pose_rim-lighting_confident-smile_corporate-blazer.jpg',
  '/poses/cat-1__direct-gaze_indoor_fresh-look.jpg',
  '/poses/m-cat-2__minimalist-studio_seated-contrapposto_sophisticated-masculine_high-contrast-monochrome_turtleneck-and-boots.jpg',
]

const galleryRow2 = [
  '/poses/cat-2__sitting-on-stairs_outdoor_indirect-gaze_looking-up_dreamy.jpg',
  '/poses/m-cat-1__car-interior_head-tilt-selfie_relaxed-smirk_athletic-jersey_natural-daylight.jpg',
  '/poses/cat-3__looking-back_over-the-shoulder_outdoor_eye-contact.jpg',
  '/poses/cat-4__dreamy_golden-hour_over-the-shoulder_looking-back_outdoor_park.jpg',
  '/poses/m-cat-3__modern-architecture_wall-lean_relaxed-mood_bright-daylight_full-body-shot.jpg',
  '/poses/cat-5__walk_sunshine_glasses_full-body-shot.jpg',
  '/poses/cat-1__gym_headphones_side-shot.jpg',
  '/poses/m-cat-4__nighttime-balcony_leaning-candid_joyful-expression_cityscape-background_artificial-urban-lighting.jpg',
  '/poses/cat-2__direct-gaze_hand-in-hair_outdoor.jpg',
  '/poses/cat-1__hand-behind_golden-hours_outside_urban.jpg',
  '/poses/m-cat-5__minimalist-interior_casual-suit-lean_professional-mood_diffused-natural-light.jpg',
  '/poses/cat-3__squat_confident_eye-contact_outdoor_fashion.jpg',
  '/poses/cat-4__eye-contact_over-the-shoulder_outdoor_sunny.jpg',
  '/poses/m-cat-2__outdoor-park_seated-side-profile_golden-hour-glow_silver-wristwatch_cheerful-mood.jpg',
  '/poses/cat-2__sitting-on-couch_eye-contact_leaning-back_hand-in-hair_indoor.jpg',
  '/poses/m-cat-1__minimalist-interior_mirror-selfie-lean_relaxed-and-confident_hand-in-pocket_soft-indoor-lighting.jpg',
]

const miniPoses = [
  '/poses/cat-1__cozy_indoor_sweet_relaxed.jpg',
  '/poses/cat-2__rest-in-hands_indoor_direct-gaze.jpg',
  '/poses/cat-3__indoor_leaning-on-wall_eye-contact_smiling.jpg',
  '/poses/cat-4__direct-gaze_indoor_smile-white-tshirt.jpg',
  '/poses/cat-5__sitting_eye-contact_business_mid-shot_confident.jpg',
  '/poses/m-cat-1__elevator-mirror-selfie_shoulder-check-pose_overhead-fluorescent-lighting_industrial-metallic-aesthetic_muscular-build.jpg',
  '/poses/cat-2__indirect-gaze_hand-on-chin_crossed-legs.jpg',
  '/poses/cat-3__squat_confident_eye-contact_outdoor_fashion.jpg',
  '/poses/cat-4__turtle-neck_hand-to-chin_elegant_indoor_indirect-gaze.jpg',
  '/poses/m-cat-2__urban-balcony_seated-leg-cross_cheerful-and-spontaneous_cream-corduroy-jacket_diffused-natural-light.jpg',
  '/poses/cat-1__direct-gaze_indoor_fresh-look.jpg',
  '/poses/m-cat-5__studio-portrait_arms-crossed-pose_rim-lighting_confident-smile_corporate-blazer.jpg',
]

export function Features() {
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroPhotos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why you&apos;ll love <span className="gradient-text">WinkyPie</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Professional photos without the professional price tag. Everything you need to look your best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="group relative md:row-span-2 rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 min-h-80 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/20">
            <div className="absolute inset-0">
              {heroPhotos.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt="AI-generated professional photo from a selfie"
                  fill
                  className={`object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 ${
                    i === heroIndex ? 'opacity-40' : 'opacity-0'
                  }`}
                  priority={i === 0}
                />
              ))}
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/80 to-card/20" />
            </div>
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">One Selfie Is Enough</h3>
              <p className="text-muted text-lg max-w-sm">
                Upload a single selfie and unlock unlimited pose possibilities. No more awkward photo shoots.
              </p>
              <div className="flex gap-1.5 mt-4">
                {heroPhotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === heroIndex ? 'w-6 bg-primary' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="group rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 p-6 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/20">
            <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] mb-5">
              <div className="flex gap-1.5 animate-mini-scroll w-max">
                {[...miniPoses, ...miniPoses].map((src, i) => (
                  <div key={i} className="relative w-16 h-22 sm:w-18 sm:h-24 shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt="Pose example"
                      fill
                      className="object-cover"
                      sizes="72px"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-1">500+ Pro Poses</h3>
            <p className="text-muted">Sitting, standing, business, casual, creative — curated for every vibe.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="group rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 p-6 flex flex-col justify-between hover:shadow-[0_0_40px_-12px] hover:shadow-primary/20">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white mb-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-1">Instant AI</h3>
                <p className="text-muted text-sm">Pro photos in seconds. Realistic results every time.</p>
              </div>
            </div>

            <div className="group rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 p-6 flex flex-col justify-between hover:shadow-[0_0_40px_-12px] hover:shadow-primary/20">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white mb-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-1">100% Private</h3>
                <p className="text-muted text-sm">Photos never leave your device. Everything stays local.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Pick a pose, <span className="gradient-text">own the spotlight</span>
            </h3>
            <p className="text-muted">Browse our ever-growing collection of professional poses</p>
          </div>

          <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex gap-3 mb-3 animate-scroll-left w-max">
              {[...galleryRow1, ...galleryRow1].map((src, i) => (
                <div key={i} className="relative w-32 h-44 sm:w-40 sm:h-56 shrink-0 rounded-2xl overflow-hidden">
                  <Image
                    src={src}
                    alt="Pose example"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-3 animate-scroll-right w-max">
              {[...galleryRow2, ...galleryRow2].map((src, i) => (
                <div key={i} className="relative w-32 h-44 sm:w-40 sm:h-56 shrink-0 rounded-2xl overflow-hidden">
                  <Image
                    src={src}
                    alt="Pose example"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['Selfie', 'Sitting', 'Standing', 'Business', 'Casual', 'Creative', 'Outdoor', 'Indoor'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
