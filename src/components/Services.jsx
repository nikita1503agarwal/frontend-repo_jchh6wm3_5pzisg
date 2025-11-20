const services = [
  {
    title: 'Web Design & Development',
    desc: 'Modern, responsive, high-conversion websites.'
  },
  {
    title: 'Branding & Logo Design',
    desc: 'Visual identity, brand systems, style guides.'
  },
  {
    title: 'Marketing & Social Media',
    desc: 'Campaigns, strategy, content, performance marketing.'
  },
  {
    title: 'Graphic Design & Print',
    desc: 'Flyers, business cards, menus, posters, packaging.'
  }
]

const Services = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Services</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {services.map((s) => (
            <a key={s.title} href="#contact" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-slate-900 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#00B8C9]/10 text-[#00B8C9] grid place-items-center font-bold group-hover:translate-x-1 transition-transform">→</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
