import { Rocket, Layers, ChartLine, Crown } from 'lucide-react'

const items = [
  {
    icon: Layers,
    title: 'All-in-One Service',
    desc: 'Everything from design to marketing under one roof.'
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    desc: 'Modern websites delivered in days, not months.'
  },
  {
    icon: ChartLine,
    title: 'Conversion-Focused',
    desc: 'Designed to turn visitors into customers.'
  },
  {
    icon: Crown,
    title: 'Premium Design Quality',
    desc: 'Clean, modern, and brand-driven visuals.'
  }
]

const USPs = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 inline-flex rounded-xl bg-[#00B8C9]/10 p-3 text-[#00B8C9]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-slate-900 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default USPs