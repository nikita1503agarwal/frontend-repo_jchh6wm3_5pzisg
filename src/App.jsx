import Hero from './components/Hero'
import USPs from './components/USPs'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#00B8C9]" />
            <span className="font-semibold">COMPLETEONE</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#portfolio" className="hover:text-slate-900">Portfolio</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="rounded-xl bg-[#00B8C9] px-4 py-2 text-sm font-semibold text-[#0a0f12] shadow-[0_10px_20px_rgba(0,184,201,0.35)]">Start a Project</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <div id="usps"><USPs /></div>
        <div id="services"><Services /></div>
        <div id="portfolio"><Portfolio /></div>
        <div id="about"><About /></div>
        <div id="contact"><Contact /></div>
      </main>

      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} COMPLETEONE. All rights reserved.
      </footer>
    </div>
  )
}

export default App
