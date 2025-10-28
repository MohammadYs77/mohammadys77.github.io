import React from 'react'
import { motion } from 'framer-motion'

export default function Header(){
  return (
    <header className="py-16 bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h1 initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-bold text-sky-700">
          Mohammad Yousefi
        </motion.h1>
        <p className="mt-3 text-slate-600">M.Sc. in Artificial Intelligence — Researcher in Deep Learning, Multimodal Sensing, & Edge AI</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          <a className="px-4 py-2 rounded border border-sky-600 text-sky-700 hover:bg-sky-50" href="mailto:mohammad99yousefi@gmail.com">Contact</a>
        </div>
      </div>
    </header>
  )
}