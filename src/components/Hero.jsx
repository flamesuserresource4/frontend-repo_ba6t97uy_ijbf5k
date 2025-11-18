import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full bg-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col items-start justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 shadow-sm">
          <span className="inline-block text-xs font-semibold tracking-widest text-red-600 uppercase">Ciprian Construction</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">We build with precision and pride</h1>
          <p className="mt-4 text-slate-700 max-w-2xl">From residential renovations to large commercial projects, we deliver craftsmanship, reliability, and modern project management — on time and on budget.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">Request a quote</a>
            <a href="#projects" className="px-5 py-3 rounded-lg bg-white text-slate-900 border border-slate-200 hover:border-slate-300 transition-colors">See our work</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  )
}
