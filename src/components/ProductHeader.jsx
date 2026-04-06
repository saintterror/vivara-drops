import { useState, useEffect, useRef } from 'react'

export default function ProductHeader() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`text-center mb-16 transition-all duration-[1200ms] ease-out ${
      visible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-12'
    }`}>
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#a8a29e] font-sans">
        Element 003
      </span>
      <h2 className="font-serif text-4xl md:text-6xl text-[#f0ece4] leading-[1.1] tracking-tight mt-3">
        The Alchemic Blend
      </h2>
      <p className="font-serif text-lg text-[#a8a29e] mt-4 max-w-xl mx-auto leading-relaxed">
        Karakoram Shilajit, Tulsi, Saffron, and Orchid Astha Varga
      </p>
    </div>
  )
}
