import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import MapPlaceholder from '../components/MapPlaceholder'
import { agent } from '../data/properties'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Looking to Buy | 买房',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const waNumber = agent.whatsapp.replace(/[^0-9]/g, '')

  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white">
        <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
          <nav className="text-xs text-white/55 flex items-center gap-1.5 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">
            Get in Touch
            <span className="text-gold-400 ml-2">| 与我联系</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            Ready to start your property journey? Drop me a message, send a
            WhatsApp, or call directly — I reply within the hour.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">
              Reach Miko <span className="text-navy-950/40 text-xl">| 联系方式</span>
            </h2>
            <div className="mt-2 h-0.5 w-10 bg-gold-500" />

            <div className="mt-6 space-y-3">
              <a href={`https://wa.me/${waNumber}`} className="btn-whatsapp w-full sm:w-auto">
                <Icon name="whatsapp" size={18} />
                WhatsApp Me <span className="opacity-80">| 微信联系</span>
              </a>

              <div className="flex items-center gap-3 rounded-lg border border-cream-200 bg-cream-50 p-4">
                <span className="w-10 h-10 grid place-items-center rounded-md bg-gold-500/10 text-gold-600 shrink-0">
                  <Icon name="phone" size={18} />
                </span>
                <div>
                  <p className="text-xs text-navy-950/55">Call directly</p>
                  <a href={`tel:${agent.phone}`} className="font-medium text-navy-950 hover:text-gold-600">
                    {agent.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-cream-200 bg-cream-50 p-4">
                <span className="w-10 h-10 grid place-items-center rounded-md bg-gold-500/10 text-gold-600 shrink-0">
                  <Icon name="mail" size={18} />
                </span>
                <div>
                  <p className="text-xs text-navy-950/55">Email</p>
                  <a href={`mailto:${agent.email}`} className="font-medium text-navy-950 hover:text-gold-600 break-all">
                    {agent.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-cream-200 bg-cream-50 p-4">
                <span className="w-10 h-10 grid place-items-center rounded-md bg-gold-500/10 text-gold-600 shrink-0">
                  <Icon name="clock" size={18} />
                </span>
                <div>
                  <p className="text-xs text-navy-950/55">Office hours</p>
                  <p className="font-medium text-navy-950">Mon – Sat · 9am – 7pm (MYT)</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-serif text-xl">Service Area <span className="text-navy-950/40 text-base">| 服务范围</span></h3>
              <div className="mt-2 h-0.5 w-10 bg-gold-500" />
              <div className="mt-4">
                <MapPlaceholder label="Johor Bahru" />
                <p className="mt-3 text-xs text-navy-950/55 inline-flex items-center gap-1.5">
                  <Icon name="pin" size={14} /> Johor Bahru, Malaysia
                </p>
              </div>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-cream-200 rounded-2xl shadow-card p-6 md:p-8 space-y-4"
            >
              <div>
                <h2 className="font-serif text-2xl">Send an Inquiry <span className="text-navy-950/40 text-lg">| 在线咨询</span></h2>
                <p className="text-sm text-navy-950/60 mt-1">Tell me a little about what you're looking for.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-xs text-navy-950/60 mb-1.5 block">
                    Name <span className="text-navy-950/40">| 姓名</span>
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="input-light"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs text-navy-950/60 mb-1.5 block">
                    Phone <span className="text-navy-950/40">| 电话</span>
                  </label>
                  <input
                    id="phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="input-light"
                    placeholder="+60 12-345 6789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-xs text-navy-950/60 mb-1.5 block">
                  Email <span className="text-navy-950/40">| 邮箱</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="input-light"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="text-xs text-navy-950/60 mb-1.5 block">
                  Interest <span className="text-navy-950/40">| 意向</span>
                </label>
                <select
                  id="interest"
                  value={form.interest}
                  onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
                  className="input-light appearance-none"
                >
                  <option>Looking to Buy | 买房</option>
                  <option>Looking to Rent | 租房</option>
                  <option>Selling Property | 出售房源</option>
                  <option>Renting Out Property | 出租房源</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-navy-950/60 mb-1.5 block">
                  Message <span className="text-navy-950/40">| 留言</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="input-light resize-none"
                  placeholder="Budget, preferred area, move-in date…"
                />
              </div>

              <button type="submit" className="btn-gold w-full mt-2">
                {sent ? 'Inquiry Sent ✓ — Miko will reply soon' : (
                  <>Submit Inquiry <span className="opacity-70">| 提交咨询</span></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
