'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const tools = [
  {
    name: 'Transaction Tracker',
    description: 'Monitor and analyze real-time blockchain transactions across multiple chains with millisecond precision.',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    name: 'Pattern Recognition',
    description: 'Utilize advanced AI algorithms to detect suspicious patterns and flag potential threats before they become problems.',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    name: 'Asset Protection',
    description: 'Implement proactive measures to safeguard digital assets and prevent unauthorized transactions.',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    name: 'Forensic Analysis',
    description: 'Conduct in-depth investigations on historical blockchain data to uncover complex transaction networks and identify key actors.',
    image: '/placeholder.svg?height=400&width=600'
  }
]

export function CryptoLensTools() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      tools.forEach((_, index) => {
        const imageSelector = `.tool-image-${index}`
        const contentSelector = `.tool-content-${index}`

        gsap.from(imageSelector, {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageSelector,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        })

        gsap.from(contentSelector, {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentSelector,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="bg-[#0e1015] text-[#f5f5eb] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">CryptoLens Tools</h2>
        {tools.map((tool, index) => (
          <div key={tool.name} className="mb-32 flex flex-col md:flex-row items-center">
            <div className={`tool-image-${index} w-full md:w-1/2 mb-8 md:mb-0`}>
              <Image
                src={tool.image}
                alt={tool.name}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className={`tool-content-${index} w-full md:w-1/2 md:pl-12`}>
              <h3 className="text-3xl font-bold mb-4">{tool.name}</h3>
              <p className="text-xl text-gray-400">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

