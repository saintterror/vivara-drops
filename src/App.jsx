'use client'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Source from './components/Source'
import Substance from './components/Substance'
import Product from './components/Product'

function App() {
  return (
    <div className="min-h-[100dvh] bg-[#000000] text-[#f0ece4]">
      <Navbar />
      <Hero />
      <Source />
      <Substance />
      <Product />
    </div>
  )
}

export default App
