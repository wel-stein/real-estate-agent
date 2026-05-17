import Icon from './Icon'
import { services } from '../data/properties'

export default function Services() {
  return (
    <section id="services" className="bg-cream-100">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <h2 className="section-title">
          Our Services <span className="text-navy-950/40 mx-1">|</span> 专业服务
        </h2>
        <div className="section-title-accent" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl border border-cream-200 p-6 shadow-card hover:shadow-elevated transition-shadow">
              <div className="w-11 h-11 grid place-items-center rounded-lg bg-gold-500/10 text-gold-600 mb-4">
                <Icon name={s.icon} size={22} />
              </div>
              <h3 className="font-serif text-lg text-navy-950">{s.title}</h3>
              <p className="text-xs text-navy-950/50 mt-1">{s.titleCn}</p>
              <p className="text-sm text-navy-950/70 mt-3 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
