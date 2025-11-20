import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0f12]">
      <div className="absolute inset-0 opacity-90" aria-hidden>
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f12]/60 via-[#0a0f12]/70 to-[#0a0f12] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-wider text-white/70">
            COMPLETEONE • All-in-One Agency
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            We build brands that sell.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl">
            Web Design. Branding. Marketing. All in one place.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-[#00B8C9] px-6 py-3 font-semibold text-[#0a0f12] shadow-[0_10px_30px_rgba(0,184,201,0.35)] hover:shadow-[0_10px_40px_rgba(0,184,201,0.5)] transition-shadow">
              Book Free Consultation
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;