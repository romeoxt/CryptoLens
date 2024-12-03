'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function LandingPage() {
  const headerRef = useRef(null)
  const sectionRefs = useRef([])

  useEffect(() => {
    const headerElement = headerRef.current
    const sectionElements = sectionRefs.current

    gsap.fromTo(
      headerElement.querySelector('h1'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    gsap.fromTo(
      headerElement.querySelector('p'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
    )

    sectionElements.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header ref={headerRef} className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
          Unveiling the Crypto Universe
        </h1>
        <p className="mb-8 text-xl md:text-2xl">
          Advanced blockchain forensics for a transparent financial future
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Explore CryptoLens
        </Button>
      </header>

      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="container mx-auto px-4 py-20"
      >
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Unparalleled Insights</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-gray-800 p-6">
            <h3 className="mb-4 text-2xl font-semibold">10B+</h3>
            <p>Transactions analyzed daily</p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6">
            <h3 className="mb-4 text-2xl font-semibold">100+</h3>
            <p>Blockchain networks supported</p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6">
            <h3 className="mb-4 text-2xl font-semibold">99.99%</h3>
            <p>Accuracy in pattern detection</p>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="container mx-auto px-4 py-20"
      >
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Why CryptoLens?</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Real-time Monitoring</h3>
            <p>
              Track transactions across multiple chains with millisecond latency, ensuring
              you never miss a beat in the fast-paced crypto world.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Advanced Pattern Recognition</h3>
            <p>
              Our AI-powered algorithms detect complex transaction patterns and anomalies,
              providing unparalleled insights into potential fraudulent activities.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="container mx-auto px-4 py-20"
      >
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Trusted by Industry Leaders</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="flex h-20 items-center justify-center rounded-lg bg-gray-800">
            Logo 1
          </div>
          <div className="flex h-20 items-center justify-center rounded-lg bg-gray-800">
            Logo 2
          </div>
          <div className="flex h-20 items-center justify-center rounded-lg bg-gray-800">
            Logo 3
          </div>
          <div className="flex h-20 items-center justify-center rounded-lg bg-gray-800">
            Logo 4
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8 text-center">
        <p>&copy; 2023 CryptoLens. All rights reserved.</p>
      </footer>
    </div>
  )
}

