import { useRef, useCallback, useEffect, useState } from 'react'

export default function SourceV2() {
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

  const headingOpacity = Math.min(1, progress * 5)
  const statsOpacity = Math.max(0, Math.min(1, (progress - 0.2) * 5))

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: '150dvh' }}
    >
      <div
        className="sticky top-0 left-0 w-screen flex items-center justify-center"
        style={{ height: '100dvh' }}
      >
        <div className="text-center">
          <div style={{ opacity: headingOpacity, transition: 'opacity 300ms ease' }}>
            <h2 className="font-serif text-3xl md:text-5xl text-[#f0ece4] leading-[1.15] tracking-tight">
              Sourced at altitude. Extracted with reverence.
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto" style={{ opacity: statsOpacity, transition: 'opacity 300ms ease' }}>
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
