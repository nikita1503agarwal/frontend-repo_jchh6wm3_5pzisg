import { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      project_type: form.get('project_type'),
      message: form.get('message')
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(err.message || 'error')
    }
  }

  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Ready to level up your brand?</h2>
              <p className="mt-3 text-slate-600">Tell us about your project and we’ll get back within 24 hours.</p>
              <a href="#contact" className="mt-6 inline-block rounded-xl bg-[#00B8C9] px-6 py-3 font-semibold text-[#0a0f12] shadow-[0_10px_30px_rgba(0,184,201,0.35)]">
                Get Started
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-600">Name</label>
                  <input required name="name" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#00B8C9]" />
                </div>
                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#00B8C9]" />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-600">Project Type</label>
                <select name="project_type" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#00B8C9]">
                  <option>Web Design & Development</option>
                  <option>Branding & Logo Design</option>
                  <option>Marketing & Social Media</option>
                  <option>Graphic Design & Print</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-600">Message</label>
                <textarea required name="message" rows="4" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#00B8C9]" />
              </div>

              <button type="submit" className="rounded-xl bg-[#00B8C9] px-6 py-3 font-semibold text-[#0a0f12] shadow-[0_10px_30px_rgba(0,184,201,0.35)]">
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              {status && status !== 'loading' && (
                <p className={`text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {status === 'success' ? 'Message sent! We will contact you shortly.' : status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact