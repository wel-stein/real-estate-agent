import { useState } from 'react'
import Icon from './Icon'
import { agent } from '../data/properties'

export default function ScheduleViewing() {
  const [form, setForm] = useState({ date: '', time: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <div className="bg-white rounded-2xl border border-cream-200 shadow-card overflow-hidden">
      <div className="p-5 flex items-center gap-3 border-b border-cream-200">
        <img
          src={agent.photo}
          alt={agent.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-cream-100"
        />
        <div>
          <p className="font-medium text-navy-950">{agent.name}</p>
          <p className="text-xs text-navy-950/55">{agent.role}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-5 space-y-4">
        <a
          href={`https://wa.me/${agent.whatsapp.replace(/[^0-9]/g, '')}`}
          className="btn-whatsapp w-full"
        >
          <Icon name="whatsapp" size={18} />
          WhatsApp Enquiry
        </a>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="visit-date" className="text-xs text-navy-950/60 mb-1.5 block">
              Visit Date
            </label>
            <div className="relative">
              <input
                id="visit-date"
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                className="input-light pr-9"
              />
              <Icon name="calendar" size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-950/40 pointer-events-none" />
            </div>
          </div>
          <div>
            <label htmlFor="visit-time" className="text-xs text-navy-950/60 mb-1.5 block">
              Visit Time
            </label>
            <div className="relative">
              <input
                id="visit-time"
                type="time"
                required
                value={form.time}
                onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                className="input-light pr-9"
              />
              <Icon name="clock" size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-950/40 pointer-events-none" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="visit-message" className="text-xs text-navy-950/60 mb-1.5 block">
            Message (optional)
          </label>
          <textarea
            id="visit-message"
            rows="3"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="input-light resize-none"
            placeholder="Anything you'd like Miko to know?"
          />
        </div>

        <button type="submit" className="btn-gold w-full">
          {sent ? 'Sent ✓ — Miko will get back to you' : (
            <>Send Message <span className="opacity-70">| 发送预约</span></>
          )}
        </button>
      </form>
    </div>
  )
}
