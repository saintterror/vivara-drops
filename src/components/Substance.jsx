'use client'
import { useState, useEffect } from 'react'

const ingredients = [
  {
    number: '001',
    name: 'Karakoram Shilajit',
    description:
      'Wild-harvested mineral resin from the high Karakoram mountains. Over 85 trace minerals, fulvic and humic acids.',
  },
  {
    number: '002',
    name: 'Tulsi',
    description:
      'A powerful adaptogen that modulates cortisol, supports immune function, and brings clarity to the nervous system.',
  },
  {
    number: '003',
    name: 'Saffron',
    description:
      'Supports mood, cognitive function, and cellular defence. One of the most researched botanicals in traditional medicine.',
  },
  {
    number: '004',
    name: 'Orchid Astha Varga',
    description:
      'A classical Himalayan herb group for rejuvenation, respiratory vitality, and deep tissue nourishment.',
  },
]

function TypeWriterText({ text, delay = 0, speed = 18, component: Component = 'span', className = '' }) {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    setVisible(0)
    if (!text.length) return
    const startTimeout = setTimeout(() => {
      for (let i = 1; i <= text.length; i++) {
        setTimeout(() => setVisible(i), (i - 1) * speed)
      }
    }, delay)
    return () => clearTimeout(startTimeout)
  }, [text, delay, speed])

  const Tag = Component
  return <Tag className={className}>{text.slice(0, visible)}</Tag>
}

export default function Substance() {
  const [key, setKey] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setKey((k) => k + 1)
      },
      { threshold: 0.2 }
    )
    return () => observer.disconnect()
  }, [])

  return (
    <section id="substance" className="py-20 md:py-28 bg-[#000000]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <TypeWriterText
            text="The Substance"
            delay={0}
            speed={22}
            component="span"
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#a8a29e]"
          />
          <h2 className="font-serif text-3xl md:text-4xl text-[#f0ece4] leading-[1.15] tracking-tight mt-3" style={{ color: '#f0ece4' }}>
            <TypeWriterText
              text="Karakoram Shilajit, Tulsi, Saffron & Orchid Astha Varga"
              delay={400}
              speed={18}
              component="span"
            />
          </h2>
          <p className="text-[15px] text-[#a8a29e] mt-3 max-w-[50ch] font-serif leading-relaxed">
            <TypeWriterText
              text="Each selected for purity, potency, and purpose."
              delay={1800}
              speed={18}
              component="span"
            />
          </p>
        </div>

        <div className="divide-y divide-[#2a2a2a]">
          {ingredients.map((ing, i) => (
            <div
              key={ing.number}
              className="group py-8 md:py-10 grid grid-cols-1 md:grid-cols-[60px_1.3fr_1fr] gap-4 md:gap-12 items-start transition-colors duration-300"
            >
              <span className="font-mono text-[10px] text-[#b08d57] tracking-wider pt-1 font-sans" style={{ opacity: Math.min(1, (key ? 1 : 0)), transitionDelay: `${i * 300}ms` }}>
                {ing.number}
              </span>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#f0ece4] tracking-tight group-hover:text-[#b08d57] transition-colors duration-500">
                  <TypeWriterText
                    text={ing.name}
                    delay={2200 + i * 600}
                    speed={18}
                    component="span"
                  />
                </h3>
              </div>
              <p className="text-[14px] text-[#a8a29e] leading-relaxed font-serif">
                <TypeWriterText
                  text={ing.description}
                  delay={2200 + i * 600 + 400}
                  speed={14}
                  component="span"
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
