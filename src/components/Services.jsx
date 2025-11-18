import { motion } from 'framer-motion'
import { Hammer, Ruler, Building2, Paintbrush } from 'lucide-react'

const services = [
  { icon: Hammer, title: 'General Contracting', desc: 'End-to-end project delivery with trusted trades and transparent timelines.' },
  { icon: Ruler, title: 'Renovations & Remodeling', desc: 'Kitchen, bath, and full-home transformations with meticulous detail.' },
  { icon: Building2, title: 'Commercial Builds', desc: 'Modern retail, office, and industrial spaces built to spec.' },
  { icon: Paintbrush, title: 'Finishes & Interiors', desc: 'Premium finishes, painting, flooring, and millwork for a polished look.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Services</h2>
          <p className="mt-3 text-slate-600">A modern construction partner with a sharp eye for detail and a commitment to safety and quality.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 text-white flex items-center justify-center">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
