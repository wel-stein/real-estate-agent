import { properties } from '../data/properties'
import PropertyCard from '../components/PropertyCard'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

export default function ListingsPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white">
        <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
          <nav className="text-xs text-white/55 flex items-center gap-1.5 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Listings</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">
            Featured Listings
            <span className="text-gold-400 ml-2">| 精选房源</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            Browse hand-picked properties across Johor Bahru's most sought-after
            neighbourhoods — from city-centre condos to family bungalows.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12 md:py-16">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
          <p className="text-sm text-navy-950/60">
            Showing {properties.length} {properties.length === 1 ? 'property' : 'properties'}
          </p>
          <Link to="/#contact" className="text-sm text-gold-600 hover:text-gold-700 inline-flex items-center gap-1.5">
            Can't find what you need? Ask Miko <Icon name="arrow" size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
