'use client'
import { useState } from 'react'
import { useEffect, useRef } from 'react'

const benefits = [
  {
    alchemy: '\u{1F702}',
    title: 'Mitochondrial Energy Support',
    description:
      'Fulvic acid + 85 trace minerals enhance nutrient absorption and support mitochondrial energy at the cellular level.',
  },
  {
    alchemy: '\u{1F703}',
    title: 'Cognitive Clarity &amp; Neuroprotection',
    description:
      'Natural compounds in Shilajit help protect neurons and balance dopamine, supporting focus and long-term brain health.',
  },
  {
    alchemy: '\u{1F704}',
    title: 'Natural Adaptogen for Stress &amp; Recovery',
    description:
      'A proven adaptogen \u2014 Shilajit helps regulate stress response, improve endurance, and restore hormonal balance.',
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [visible])

  return (
    <section id="benefits" className="py-28 md:py-36 border-t border-[#2a2a2a]">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto px-6 lg:px-12"
      >
        <div className="text-center mb-16 md:mb-20">
          <span
            className={`font-mono text-[10px] tracking-[0.3em] uppercase text-[#a8a29e] font-sans transition-all duration-[1200ms] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Why It Works
          </span>
          <h2
            className={`font-serif text-3xl md:text-5xl text-[#f0ece4] leading-[1.15] tracking-tight mt-4 transition-all duration-[1200ms] delay-[200ms] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Three reasons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`p-8 bg-[#111] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-[1200ms] ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              } ${i === 1 ? 'delay-[300ms]' : i === 2 ? 'delay-[400ms]' : ''}`}
            >
              <div className="text-2xl mb-4">{b.alchemy}</div>
              <h3 className="font-serif text-2xl text-[#f0ece4] tracking-tight mb-4">
                {b.title}
              </h3>
              <p className="text-[14px] text-[#a8a29e] leading-relaxed font-serif" dangerouslySetInnerHTML={{ __html: b.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
