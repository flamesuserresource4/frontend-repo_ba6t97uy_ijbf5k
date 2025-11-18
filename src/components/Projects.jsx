import { motion } from 'framer-motion'

const projects = [
  { title: 'Redline Tower Lobby', tag: 'Commercial', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Hillside Residence', tag: 'Residential', img: 'https://images.unsplash.com/photo-1523419409543-a5e549c1cfb7?q=80&w=1600&auto=format&fit=crop' },
  { title: 'Northline Retail Build-out', tag: 'Retail', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop' },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Featured projects</h2>
            <p className="mt-3 text-slate-600">A snapshot of recent work showcasing craftsmanship, coordination, and clean execution.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Work with us</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} href="#contact" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-red-600">{p.tag}</div>
                  <div className="text-slate-900 font-semibold">{p.title}</div>
                </div>
                <div className="text-slate-400 group-hover:text-red-600 transition-colors">→</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
