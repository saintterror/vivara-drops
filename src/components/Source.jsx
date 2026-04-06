'use client'
import { useRef, useCallback, useEffect, useState } from 'react'

export default function Source() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const sectionHeight = rect.height - window.innerHeight
    const p = Math.max(0, Math.min(1, -rect.top / sectionHeight))
    setProgress(p)

    const video = videoRef.current
    if (video && video.duration) {
      video.currentTime = p * video.duration
    }
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
      style={{ height: '150dvh', overflow: 'hidden' }}
    >
      {/* Scroll-driven video background */}
      <div
        className="sticky top-0 left-0 right-0 w-screen flex items-center justify-center"
        style={{ height: '100dvh' }}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            opacity: progress < 0.5 ? 1 : 1 - 0.8 * (progress - 0.5) / 0.5,
            transition: 'opacity 80ms ease',
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
