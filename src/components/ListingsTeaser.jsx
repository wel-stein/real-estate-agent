import { Link } from 'react-router-dom'
import Icon from './Icon'
import { properties } from '../data/properties'

export default function ListingsTeaser() {
  const previews = properties.slice(0, 3)
  return (
    <section id="listings" className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <div className="rounded-2xl bg-cream-50 border border-cream-200 overflow-hidden">
          <div className="grid md:grid-cols-[1.1fr_1fr]">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-gold-600 text-xs tracking-[0.25em] uppercase mb-3">
                Featured Properties
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-950 leading-tight">
                Browse Featured Listings
                <span className="text-navy-950/40 ml-2 text-2xl">| 精选房源</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-navy-950/70 leading-relaxed max-w-md">
                Hand-picked homes, condos and investments across Johor Bahru —
                updated regularly with the latest opportunities.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Bukit Indah', 'Mount Austin', 'Taman Molek', 'JB Town'].map((area) => (
                  <span key={area} className="text-xs px-3 py-1.5 rounded-full bg-white border border-cream-200 text-navy-950/70">
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/listings" className="btn-gold">
                  View All Listings <Icon name="arrow" size={16} />
                </Link>
                <a href="#contact" className="btn-outline-gold">
                  Talk to Miko <span className="opacity-70">| 联系我</span>
                </a>
              </div>
            </div>

            <div className="relative grid grid-cols-3 gap-1 p-1.5 md:p-2 bg-cream-100">
              {previews.map((p, i) => (
                <Link
                  to={`/property/${p.id}`}
                  key={p.id}
                  className={`relative overflow-hidden rounded-lg group ${
                    i === 0 ? 'col-span-3 aspect-[16/9]' : 'aspect-[4/5]'
                  }`}
                >
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
                  <div className="absolute left-3 bottom-3 right-3 text-white">
                    <p className="text-xs font-medium truncate">{p.name}</p>
                    <p className="text-[10px] text-white/75">RM {p.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
