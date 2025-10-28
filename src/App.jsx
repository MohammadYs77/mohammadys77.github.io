import React from 'react'
import { motion } from 'framer-motion'
import Header from './sections/Header'
import About from './sections/About'
import Research from './sections/Research'
import Publications from './sections/Publications'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-900">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-14">
        <About />
        <Research />
        <Publications />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}