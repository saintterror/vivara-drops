'use client'
import { useEffect, useRef } from 'react'

export default function VideoBackground() {
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
    <div ref={containerRef} className="relative" style={{ height: '250dvh' }}>
      <div className="sticky top-0 left-0 right-0 w-screen flex items-center justify-center" style={{ height: '100dvh' }}>
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>
    </div>
  )
}
