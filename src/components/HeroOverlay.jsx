'use client'
import { useState, useRef, useCallback, useEffect } from 'react'

const paragraphs = [
  "Born from a conviction: the most potent medicine already exists in nature, if you know where to look. Our Shilajit is harvested above 14,000 feet in the Karakoram mountains",
  "— a raw, unadulterated resin condensed by centuries of geological pressure.",
  "We then blend it with classical Ayurvedic adjuncts",
  "— Tulsi, Blue Lotus, Saffron —",
  "each selected for purity, potency, and purpose.",
  "No synthetic fillers. No standardised extracts. Just the whole plant, the whole mineral, the whole intention.",
  "The result is an adaptogenic elixir that bridges matter and mind. Biointelligent, clean, and alive.",
]

function FadeInText({ text, scrollProgress }) {
  const chars = text.split('')
  return (
    <span>
      {chars.map((char, i) => {
        const charTrigger = i / chars.length
        const opacity = scrollProgress >= charTrigger
          ? Math.min(1, (scrollProgress - charTrigger) / 0.03)
          : 0
        return (
          <span
            key={i}
            style={{
              opacity,
              transition: 'opacity 80ms ease',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        )
      })}
    </span>
  )
}

export default function HeroOverlay() {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const sectionHeight = rect.height - window.innerHeight
    const p = Math.max(0, Math.min(1, -rect.top / sectionHeight))
    setProgress(p)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <section
      id="the-source"
      ref={containerRef}
      className="relative"
      style={{ height: '250dvh' }}
    >
      {/* Black header image placeholder */}
      <div className="sticky top-0 left-0 right-0 w-screen flex items-center justify-center" style={{ height: '100dvh' }}>
        <div className="w-full h-full bg-[#000000]" />
      </div>

      {/* Text overlay */}
      <div className="sticky top-0 left-0 right-0 flex items-center justify-center" style={{ zIndex: 10, minHeight: '100dvh' }}>
        <div className="w-[90%] mx-auto text-center flex flex-col items-center gap-4" style={{ paddingTop: 32, paddingBottom: 32, paddingLeft: 32, paddingRight: 32 }}>
          <span
            className="font-mono text-[10px] tracking-[0.3em] uppercase"
            style={{
              opacity: progress >= 0.05
                ? Math.min(1, (progress - 0.05) / 0.08)
                : 0,
              transition: 'opacity 600ms ease',
              color: '#a8a29e',
            }}
          >
            The Source
          </span>

          <h2
            className="font-serif text-xl md:text-3xl leading-[1.15] tracking-tight text-center"
            style={{ color: '#f0ece4' }}
          >
            <FadeInText
              text="Sourced at altitude. Extracted with reverence."
              scrollProgress={Math.max(0, (progress - 0.08) * 4)}
            />
          </h2>

          {paragraphs.map((p, i) => {
            const threshold = 0.1 + i * 0.1
            const pProgress = Math.max(0, Math.min(1, (progress - threshold) / 0.08))
            return (
              <p
                key={i}
                className="font-serif text-[12px] leading-relaxed text-center"
                style={{
                  opacity: pProgress > 0 ? Math.max(0.05, pProgress) : 0,
                  transition: 'opacity 600ms ease',
                }}
              >
                <FadeInText text={p} scrollProgress={pProgress} />
              </p>
            )
          })}

          <div
            className="grid grid-cols-3 gap-3 mt-3"
            style={{
              opacity: Math.max(0, (progress - 0.6) / 0.15),
              transition: 'opacity 600ms ease',
            }}
          >
            {[
              { value: '14,000', label: 'Feet Altitude' },
              { value: '85+', label: 'Trace Minerals' },
              { value: '100%', label: 'Natural · No Fillers' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-base text-[#f0ece4] tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-[8px] text-[#a8a29e] tracking-widest uppercase mt-1 font-sans font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
