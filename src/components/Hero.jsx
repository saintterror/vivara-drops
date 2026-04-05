'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    function handleScroll() {
      const video = videoRef.current
      const container = containerRef.current
      if (!video || !video.duration || !container) return

      const rect = container.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const p = Math.max(0, Math.min(1, -rect.top / scrollable))

      video.currentTime = p * video.duration
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative" style={{ height: '115dvh', overflow: 'hidden' }}>
      <div className="sticky top-0 flex items-center justify-center w-screen h-[100dvh]">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          style={{
            width: 'auto',
            height: '100dvh',
            minWidth: '100vw',
            objectFit: 'contain',
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
