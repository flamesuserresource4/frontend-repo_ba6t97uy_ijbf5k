import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Request a quote</h2>
          <p className="mt-3 text-slate-600">Tell us about your project and we’ll get back within one business day.</p>
        </div>

        <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full name" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="email" placeholder="Email" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="tel" placeholder="Phone" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input type="text" placeholder="Project type (e.g., renovation, commercial)" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <textarea placeholder="Brief project details" rows={5} className="md:col-span-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <button type="button" className="md:col-span-2 w-full bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition-colors">Send request</button>
        </motion.form>
      </div>
    </section>
  )
}
