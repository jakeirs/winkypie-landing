'use client'

import { useInView } from '@/hooks/useInView'

type Animation = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in'

export default function AnimateOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  animation?: Animation
  delay?: number
  className?: string
}) {
  const { ref, isInView } = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`scroll-animate scroll-${animation} ${isInView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
