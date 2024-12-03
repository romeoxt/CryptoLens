'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function FlowingBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shapes = backgroundRef.current?.querySelectorAll('.shape')
    if (!shapes) return

    shapes.forEach((shape) => {
      gsap.to(shape, {
        x: 'random(-50, 50)',
        y: 'random(-50, 50)',
        rotation: 'random(-15, 15)',
        duration: 'random(20, 30)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
  }, [])

  return (
    <div ref={backgroundRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="shape absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-20 blur-3xl" />
      <div className="shape absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-500 opacity-20 blur-3xl" />
      <div className="shape absolute top-3/4 left-1/2 w-96 h-96 rounded-full bg-gradient-to-bl from-green-400 to-emerald-500 opacity-20 blur-3xl" />
    </div>
  )
}

