const About = () => {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">About</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              CompleteOne helps small businesses grow with modern design, smart branding, and powerful marketing. Focused on clarity, speed, and results.
            </p>
          </div>
          <div>
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#00B8C9] to-[#00B8C9]/60 shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About