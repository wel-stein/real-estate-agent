import { Link } from 'react-router-dom'
import Icon from './Icon'
import { services } from '../data/properties'

export default function ServicesTeaser() {
  return (
    <section id="services" className="bg-cream-100">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <div className="md:flex md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-gold-600 text-xs tracking-[0.25em] uppercase mb-3">
              What I do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-950 leading-tight">
              Our Services
              <span className="text-navy-950/40 ml-2 text-2xl">| 专业服务</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-navy-950/65 max-w-xl">
              Personal, bilingual service for buyers, sellers, tenants and landlords across Johor Bahru.
            </p>
          </div>
          <Link
            to="/services"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-gold-600 hover:text-gold-700"
          >
            See all services <Icon name="arrow" size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="bg-white rounded-xl border border-cream-200 p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 grid place-items-center rounded-lg bg-gold-500/10 text-gold-600 mb-4">
                <Icon name={s.icon} size={22} />
              </div>
              <h3 className="font-serif text-lg text-navy-950">{s.title}</h3>
              <p className="text-xs text-navy-950/50 mt-1">{s.titleCn}</p>
              <p className="text-sm text-navy-950/70 mt-3 leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Link to="/services" className="btn-outline-gold">
            See all services <Icon name="arrow" size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
