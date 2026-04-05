'use client'
import { useState, useRef, useCallback, useEffect } from 'react'

const paragraphs = [
  'Vivara was born from a conviction: the most potent medicine already exists in nature, if you know where to look. Our Shilajit is harvested above 14,000 feet in the Karakoram mountains — a raw, unadulterated resin condensed by centuries of geological pressure.',
  'We then blend it with classical Ayurvedic adjuncts — Tulsi, Blue Lotus, Saffron — each selected for purity, potency, and purpose. No synthetic fillers. No standardised extracts. Just the whole plant, the whole mineral, the whole intention.',
  'The result is an adaptogenic elixir that bridges matter and mind. Biointelligent, clean, and alive.',
]

function FadeInText({ text, scrollProgress }) {
  const chars = text.split('')
  return (
    <span>
      {chars.map((char, i) => {
        const charTrigger = i / chars.length
        const opacity = scrollProgress >= charTrigger
          ? Math.min(1, (scrollProgress - charTrigger) / 0.06)
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

export default function Source() {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    // progress: 0 when section top reaches viewport top, 1 when fully scrolled through
    const p = Math.max(0, Math.min(1, -rect.top / (window.innerHeight * 1.5)))
    setProgress(p)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    // Tall container for scroll-stop pinning
    <section
      id="source"
      ref={containerRef}
      className="relative"
      style={{ height: '250dvh' }}
    >
      {/* Pinned viewport */}
      <div
        className="sticky top-0 left-0 right-0 flex items-center justify-center overflow-hidden bg-[#000000]"
        style={{ height: '100dvh' }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          {/* Eyebrow */}
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

          {/* Heading — character by character fade */}
          <h2
            className="font-serif text-3xl md:text-5xl leading-[1.15] tracking-tight"
            style={{ color: '#f0ece4' }}
          >
            <FadeInText
              text="Sourced at altitude. Extracted with reverence."
              scrollProgress={Math.max(0, (progress - 0.08) * 4)}
            />
          </h2>

          {/* Paragraphs — word-by-word fade */}
          {paragraphs.map((p, i) => {
            const threshold = 0.18 + i * 0.18
            const pProgress = Math.max(0, Math.min(1, (progress - threshold) / 0.14))
            return (
              <p
                key={i}
                className="font-serif text-[17px] leading-relaxed"
                style={{
                  opacity: pProgress > 0 ? Math.max(0.05, pProgress) : 0,
                  transition: 'opacity 600ms ease',
                }}
              >
                <FadeInText text={p} scrollProgress={pProgress} />
              </p>
            )
          })}

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-8"
            style={{
              opacity: Math.max(0, (progress - 0.7) / 0.12),
              transition: 'opacity 600ms ease',
            }}
          >
            {[
              { value: '14,000', label: 'Feet Altitude' },
              { value: '85+', label: 'Trace Minerals' },
              { value: '100%', label: 'Natural · No Fillers' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-xl text-[#f0ece4] tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-[10px] text-[#a8a29e] tracking-widest uppercase mt-1 font-sans font-light">
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
