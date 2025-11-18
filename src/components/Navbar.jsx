import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-700 hover:text-red-600 transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 shadow-sm" />
          <span className="text-xl font-semibold tracking-tight text-slate-900">Ciprian</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+10000000000" className="inline-flex items-center gap-2 text-slate-700 hover:text-red-600">
            <Phone className="w-4 h-4" />
            <span>Call</span>
          </a>
          <a href="mailto:hello@ciprian.build" className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            <Mail className="w-4 h-4" />
            <span>Get a quote</span>
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="mailto:hello@ciprian.build" className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg w-max">
              <Mail className="w-4 h-4" />
              <span>Get a quote</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
