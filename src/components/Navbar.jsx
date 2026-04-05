'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'The Source', href: '#source' },
  { label: 'The Substance', href: '#substance' },
  { label: 'Shop', href: '#shop' },
  { label: 'Benefits', href: '#benefits' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]'
          : 'bg-transparent'
      }`}
    >
      {/* Announce bar */}
      <div className="bg-[#0d0d0d] text-center py-2 text-[10px] tracking-[0.25em] uppercase text-[#a8a29e]">
        Complimentary delivery on orders over $100 USD
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img src="/vivara-logo.png" alt="Vivara" className="h-6 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-[13px] tracking-wide text-[#a8a29e] hover:text-[#f0ece4] transition-colors duration-300 font-light font-sans cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#shop"
            onClick={(e) => handleSmoothScroll(e, '#shop')}
            className="ml-2 px-6 py-2 bg-[#f0ece4] text-[#0a0a0a] text-xs tracking-wide font-medium hover:bg-[#b08d57] hover:text-[#0a0a0a] transition-all duration-300 active:scale-[0.98] font-sans cursor-pointer"
          >
            Shop $69
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-[#f0ece4] transition-all duration-300 ${open ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-[#f0ece4] transition-all duration-300 ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#2a2a2a] px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="block text-lg text-[#a8a29e] hover:text-[#f0ece4] tracking-wide font-serif cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#shop"
            onClick={(e) => handleSmoothScroll(e, '#shop')}
            className="inline-block px-6 py-2.5 bg-[#f0ece4] text-[#0a0a0a] text-xs tracking-wide font-sans cursor-pointer"
          >
            Shop $69
          </a>
        </div>
      )}
    </nav>
  )
}
