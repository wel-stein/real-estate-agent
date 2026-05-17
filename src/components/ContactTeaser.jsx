import { Link } from 'react-router-dom'
import Icon from './Icon'
import { agent } from '../data/properties'

export default function ContactTeaser() {
  const waNumber = agent.whatsapp.replace(/[^0-9]/g, '')
  return (
    <section id="contact" className="bg-navy-950 text-white">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <div className="grid md:grid-cols-[1.2fr_auto] gap-8 items-center">
          <div>
            <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-3">
              Let's talk
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Get in Touch
              <span className="text-white/40 ml-2 text-2xl">| 与我联系</span>
            </h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Drop a message, send a WhatsApp, or call directly — I reply within
              the hour and walk you through every step.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              <a href={`tel:${agent.phone}`} className="inline-flex items-center gap-2 hover:text-white">
                <Icon name="phone" size={16} className="text-gold-400" />
                {agent.phone}
              </a>
              <a href={`mailto:${agent.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <Icon name="mail" size={16} className="text-gold-400" />
                {agent.email}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/contact" className="btn-gold">
              Contact Page <Icon name="arrow" size={16} />
            </Link>
            <a href={`https://wa.me/${waNumber}`} className="btn-whatsapp">
              <Icon name="whatsapp" size={18} />
              WhatsApp Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
