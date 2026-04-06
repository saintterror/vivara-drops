'use client'
import { useState, useEffect, useCallback, useRef } from 'react'

const faqs = [
  {
    q: 'What is inside each bottle?',
    a: 'Each 30ml bottle contains: Karakoram Shilajit Extract (purified resin), structured spring water, trace colloidal silver, Tulsi (Holy Basil) extract, Saffron (Crocus sativus) stigma extract, Orchid Astha Varga extract, Swarna Bhasma (24k Gold Ash), Blue Lotus (Nymphaea caerulea) extract, and Amritam Blend (organic ghee + raw honey carrier). All ingredients are third-party tested for heavy metals, pesticides, and microbial contamination.',
  },
  {
    q: 'How long does one bottle last?',
    a: 'At the recommended dose of 1\u20133 drops daily, one 30ml bottle provides approximately 300 drops. That is 100 to 300 days of use, depending on your chosen dose.',
  },
  {
    q: 'Is this safe if I have allergies?',
    a: 'This formula contains bee-derived compounds (raw honey, royal jelly derivatives) and flower extracts. If you have allergies to bee products, consult your healthcare provider before use. The formula is free from gluten, soy, dairy, and shellfish.',
  },
  {
    q: 'When will I feel the effects?',
    a: 'Some users report noticeable effects within the first 3\u20135 days. However, the full adaptogenic cascade typically requires 14+ days of consistent daily use. Adaptogens are cumulative, not acute.',
  },
  {
    q: 'How and when will my order ship?',
    a: 'Orders are processed and shipped within 2\u20134 business days from our facility. We ship worldwide via tracked courier. Complimentary delivery on orders over $100 USD.',
  },
]

const benefits = [
  {
    alchemy: '\u{1F702}',
    title: 'Mitochondrial Energy Support',
    description:
      'Fulvic acid + 85 trace minerals enhance nutrient absorption and support mitochondrial energy at the cellular level.',
  },
  {
    alchemy: '\u{1F703}',
    title: 'Cognitive Clarity and Neuroprotection',
    description:
      'Natural compounds in Shilajit help protect neurons and balance dopamine, supporting focus and long-term brain health.',
  },
  {
    alchemy: '\u{1F704}',
    title: 'Natural Adaptogen for Stress and Recovery',
    description:
      'A proven adaptogen. Shilajit helps regulate stress response, improve endurance, and restore hormonal balance.',
  },
]

import ProductHeader from './ProductHeader'

export default function Product() {
  const [openFaq, setOpenFaq] = useState(null)
  const [quantity, setQuantity] = useState(1)

  return (
    <section id="shop" className="py-28 md:py-36 border-t border-[#2a2a2a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ProductHeader />

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left \u2014 product image */}
          <div>
            <div className="aspect-[3/4] bg-[#111] overflow-hidden">
              <img
                src="/vivara-product.webp"
                alt="Vivara Shilajit Drops"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right \u2014 product info & cart */}
          <div className="lg:pt-8">
            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-3xl text-[#f0ece4]">$69.00</span>
              <span className="text-sm text-[#a8a29e] font-sans font-light">USD</span>
            </div>

            {/* Sold out badge */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 border border-[#a8a29e] text-[#a8a29e] text-xs tracking-widest uppercase font-sans font-light">
                Sold Out
              </span>
            </div>

            {/* Description */}
            <div className="space-y-5 mb-8">
              <p className="font-serif text-[15px] text-[#a8a29e] leading-relaxed">
                Born from a conviction: the most potent medicine already exists in nature, if you know where to look. Our Shilajit is harvested above 14,000 feet in the Karakoram mountains — a raw, unadulterated resin condensed by centuries of geological pressure.
              </p>
              <p className="font-serif text-[15px] text-[#a8a29e] leading-relaxed">
                We then blend it with classical Ayurvedic adjuncts — Tulsi, Blue Lotus, Saffron — each selected for purity, potency, and purpose. No synthetic fillers. No standardised extracts. Just the whole plant, the whole mineral, the whole intention.
              </p>
              <p className="font-serif text-[15px] text-[#a8a29e] leading-relaxed">
                The result is an adaptogenic elixir that bridges matter and mind. Biointelligent, clean, and alive.
              </p>
              <p className="font-serif text-[15px] text-[#f0ece4]/50 leading-relaxed pt-2 border-t border-[#2a2a2a]">
                A liquid adaptogenic tincture. Wild-extracted Karakoram Shilajit combined with Tulsi, Saffron, and Orchid Astha Varga. Suspended in structured spring water with trace colloidal gold and silver. Fast sublingual delivery over capsules or powders.
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-[#a8a29e] font-sans font-light">
                Quantity
              </span>
              <div className="flex items-center border border-[#3a3a3a]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-2.5 text-[#f0ece4] hover:text-[#b08d57] transition-colors font-mono text-lg leading-none select-none"
                >
                  -
                </button>
                <span className="px-4 py-2.5 text-[#f0ece4] text-sm border-x border-[#3a3a3a] font-mono min-w-[3rem] text-center select-none">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="px-4 py-2.5 text-[#f0ece4] hover:text-[#b08d57] transition-colors font-mono text-lg leading-none select-none"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart / notify */}
            <button
              disabled
              className="w-full py-4 bg-[#2a2a2a] text-[#a8a29e] text-sm tracking-wide font-sans font-light cursor-not-allowed mb-3"
            >
              Notify When Available
            </button>

            {/* Subscription note */}
            <p className="text-[12px] text-[#a8a29e] text-center font-sans font-light leading-relaxed">
              Currently available via subscription model. Complete your purchase
              and you agree to our subscription terms which include recurring
              billing. You can cancel anytime.
            </p>

            {/* Free shipping note */}
            <p className="text-[12px] text-[#b08d57] text-center font-sans font-light mt-3">
              Free shipping on orders over $100 USD
            </p>
          </div>
        </div>
      </div>

      {/* Benefits - above Details */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-8 bg-[#000000] border border-[#2a2a2a]"
            >
              <div className="text-2xl mb-4">{b.alchemy}</div>
              <h3 className="font-serif text-xl text-[#f0ece4] tracking-tight mb-3">
                {b.title}
              </h3>
              <p className="text-[14px] text-[#a8a29e] leading-relaxed font-serif" dangerouslySetInnerHTML={{ __html: b.description }} />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ / Info Accordions */}
      <div className="mt-24 max-w-4xl mx-auto px-6 lg:px-12">
        <h3 className="font-serif text-3xl text-[#f0ece4] tracking-tight mb-10 text-center">
          Details
        </h3>
        <div className="divide-y divide-[#2a2a2a]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="font-serif text-lg text-[#f0ece4] tracking-tight group-hover:text-[#b08d57] transition-colors duration-300">
                  {faq.q}
                </span>
                <span className="text-[#a8a29e] text-xl ml-4 shrink-0 transition-transform duration-300">
                  {openFaq === i ? '-' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openFaq === i
                    ? 'max-h-96 opacity-100 pb-6'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[14px] text-[#a8a29e] leading-relaxed font-serif pr-8">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-28 border-t border-[#2a2a2a] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            <div className="md:col-span-2">
              <div className="font-serif text-2xl tracking-tight text-[#f0ece4] mb-4" style={{ fontWeight: 600 }}>
                Vivara
              </div>
              <p className="text-sm text-[#a8a29e] font-serif leading-relaxed max-w-[40ch]">
                Biointelligent adaptogenic elixirs. Wild-harvested, ethically
                sourced, lab-tested. Each drop carries the intelligence of the
                elements.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:vivaradrops@gmail.com"
                  className="text-sm text-[#b08d57] hover:text-[#c9a96e] transition-colors font-sans font-light"
                >
                  vivaradrops@gmail.com
                </a>
              </div>
            </div>

            <div>
              <div className="text-[10px] text-[#a8a29e] tracking-widest uppercase font-sans font-light mb-4">
                Navigate
              </div>
              <div className="space-y-3">
                {['The Source', 'The Substance', 'Shop', 'Benefits'].map(
                  (link) => (
                    <SmoothScrollLink key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} text={link} />
                  )
                )}
              </div>
            </div>

            <div>
              <div className="text-[10px] text-[#a8a29e] tracking-widest uppercase font-sans font-light mb-4">
                Legal
              </div>
              <div className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Shipping Info'].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-[13px] text-[#a8a29e] hover:text-[#f0ece4] transition-colors font-sans font-light"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 mb-12 max-w-md mx-auto text-center">
            <p className="font-serif text-lg text-[#f0ece4] mb-4">
              Stay in the loop
            </p>
            <p className="text-sm text-[#a8a29e] font-sans font-light mb-6">
              Be the first to know when new formulations drop.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-[#111] border border-[#3a3a3a] px-4 py-3 text-sm text-[#f0ece4] placeholder:text-[#5c5c5c] focus:outline-none focus:border-[#b08d57] transition-colors font-sans font-light"
              />
              <button className="px-6 py-3 bg-[#f0ece4] text-[#000000] text-sm tracking-wide font-sans hover:bg-[#b08d57] transition-colors active:scale-[0.98]">
                Join
              </button>
            </div>
          </div>

          <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="font-mono text-[10px] text-[#a8a29e] font-sans font-light">
              \u00A9 2025 Vivara Drops. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[12px] text-[#a8a29e] hover:text-[#f0ece4] font-sans font-light transition-colors">
                Instagram
              </a>
              <a href="#" className="text-[12px] text-[#a8a29e] hover:text-[#f0ece4] font-sans font-light transition-colors">
                X / Twitter
              </a>
              <a href="#" className="text-[12px] text-[#a8a29e] hover:text-[#f0ece4] font-sans font-light transition-colors">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

// Smooth scroll link component for all navigation
function SmoothScrollLink({ href, text }) {
  const handleClick = (e) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block text-[13px] text-[#a8a29e] hover:text-[#f0ece4] transition-colors font-sans font-light"
    >
      {text}
    </a>
  )
}
