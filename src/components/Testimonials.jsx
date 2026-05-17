import Icon from './Icon'
import { testimonials } from '../data/properties'

export default function Testimonials() {
  return (
    <section className="bg-cream-100">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <h2 className="section-title">
          What My Clients Say <span className="text-navy-950/40 mx-1">|</span> 客户评价
        </h2>
        <div className="section-title-accent" />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl border border-cream-200 p-6 shadow-card">
              <div className="text-gold-500 mb-3">
                <Icon name="quote" size={24} />
              </div>
              <div className="flex items-center gap-0.5 text-gold-500 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Icon key={i} name="star_filled" size={14} />
                ))}
              </div>
              <p className="text-sm text-navy-950/75 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 pt-4 border-t border-cream-200">
                <p className="font-medium text-navy-950">— {t.name}</p>
                <p className="text-xs text-navy-950/50 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
