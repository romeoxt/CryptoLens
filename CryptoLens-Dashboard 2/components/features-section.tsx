'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pin = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Animate sections
      timeline
        .from('.feature-1', { opacity: 0, x: 100 })
        .from('.feature-2', { opacity: 0, x: 100 })
        .from('.feature-3', { opacity: 0, x: 100 })

      // Floating animations for shapes
      gsap.to('.floating-shape', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    return () => pin.revert()
  }, [])

  return (
    <div ref={triggerRef} className="relative bg-[#0e1015] text-[#f5f5eb]">
      <div ref={sectionRef} className="min-h-screen relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="floating-shape absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 blur-xl opacity-30" />
        <div className="floating-shape absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-500 blur-xl opacity-30" />
        <div className="floating-shape absolute top-1/2 right-1/2 w-24 h-24 rounded-full bg-gradient-to-bl from-green-400 to-emerald-500 blur-xl opacity-30" />

        {/* Content sections */}
        <div className="feature-1 absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block bg-pink-500/20 rounded-lg px-4 py-2 mb-4">
              Track Everything
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Real-time Blockchain Analysis
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Monitor transactions across 100+ chains with millisecond precision.
              Never miss a suspicious movement again.
            </p>
          </div>
        </div>

        <div className="feature-2 absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block bg-orange-500/20 rounded-lg px-4 py-2 mb-4">
              Protect Assets
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              $8.7B Lost to Crypto Fraud
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              In 2023 alone, billions were lost to cryptocurrency fraud. 
              Our platform helps prevent and investigate these incidents.
            </p>
          </div>
        </div>

        <div className="feature-3 absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block bg-blue-500/20 rounded-lg px-4 py-2 mb-4">
              Advanced Analytics
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Pattern Recognition AI
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Our AI algorithms detect suspicious patterns with 99.99% accuracy,
              flagging potential threats before they become problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

