import { useState } from 'react'
import Icon from './Icon'
import { agent } from '../data/properties'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: 'Looking to Buy | 买房' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="bg-navy-950 text-white">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">
            Get in Touch <span className="text-white/40 mx-1">|</span> <span className="text-gold-400">与我联系</span>
          </h2>
          <p className="text-white/70 mt-4 text-sm leading-relaxed max-w-md">
            Ready to start your property journey? Drop me a message or call directly.
          </p>
          <div className="mt-8 space-y-3">
            <a
              href={`https://wa.me/${agent.whatsapp.replace(/[^0-9]/g, '')}`}
              className="btn-whatsapp w-full sm:w-auto"
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp Me <span className="opacity-80">| 微信联系</span>
            </a>
            <div className="flex items-center gap-3 text-white/85 text-sm">
              <span className="w-9 h-9 grid place-items-center rounded-md bg-gold-500/20 text-gold-400">
                <Icon name="phone" size={16} />
              </span>
              <a href={`tel:${agent.phone}`} className="hover:text-white">{agent.phone}</a>
            </div>
            <div className="flex items-center gap-3 text-white/85 text-sm">
              <span className="w-9 h-9 grid place-items-center rounded-md bg-gold-500/20 text-gold-400">
                <Icon name="mail" size={16} />
              </span>
              <a href={`mailto:${agent.email}`} className="hover:text-white">{agent.email}</a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-navy-900 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div>
            <label htmlFor="name" className="text-xs text-white/60 mb-1.5 block">Name <span className="text-white/40">| 姓名</span></label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="input-field"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs text-white/60 mb-1.5 block">Email <span className="text-white/40">| 邮箱</span></label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="input-field"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-xs text-white/60 mb-1.5 block">Phone <span className="text-white/40">| 电话</span></label>
            <input
              id="phone"
              required
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="input-field"
              placeholder="+60 12-345 6789"
            />
          </div>
          <div>
            <label htmlFor="interest" className="text-xs text-white/60 mb-1.5 block">Interest <span className="text-white/40">| 意向</span></label>
            <select
              id="interest"
              value={form.interest}
              onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
              className="input-field appearance-none"
            >
              <option className="text-navy-950">Looking to Buy | 买房</option>
              <option className="text-navy-950">Looking to Rent | 租房</option>
              <option className="text-navy-950">Selling Property | 出售房源</option>
              <option className="text-navy-950">Renting Out Property | 出租房源</option>
            </select>
          </div>
          <button type="submit" className="btn-gold w-full mt-2">
            {sent ? 'Inquiry Sent ✓' : (
              <>Submit Inquiry <span className="opacity-70">| 提交咨询</span></>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
