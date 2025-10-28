import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-20 py-8 text-center text-slate-500">
      <p>© {new Date().getFullYear()} Mohammad Yousefi · Built with React + Vite</p>
    </footer>
  )
}