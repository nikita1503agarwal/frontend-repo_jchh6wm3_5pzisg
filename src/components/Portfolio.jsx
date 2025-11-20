const items = [
  { tag: 'Websites', title: 'E-commerce Storefront', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { tag: 'Logos', title: 'Minimal Mark', img: 'https://images.unsplash.com/photo-1611162618071-b39a2ec7f7a8?q=80&w=1200&auto=format&fit=crop' },
  { tag: 'Mockups', title: 'Packaging Concept', img: 'https://images.unsplash.com/photo-1585386959984-a4155223168f?q=80&w=1200&auto=format&fit=crop' },
  { tag: 'Brand Systems', title: 'Style Guide', img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop' },
  { tag: 'Social Media', title: 'Campaign Visuals', img: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1200&auto=format&fit=crop' },
  { tag: 'Websites', title: 'SaaS Landing', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop' }
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Portfolio</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/11] overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#00B8C9]/0 group-hover:bg-[#00B8C9]/10 transition-colors" />
              </div>
              <div className="p-5">
                <span className="inline-flex text-xs rounded-full bg-slate-100 text-slate-600 px-3 py-1">{it.tag}</span>
                <h3 className="mt-3 font-semibold text-slate-900">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio