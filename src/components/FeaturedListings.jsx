import { properties } from '../data/properties'
import PropertyCard from './PropertyCard'
import Icon from './Icon'

export default function FeaturedListings() {
  return (
    <section id="listings" className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="w-full md:w-auto md:flex-1">
            <h2 className="section-title md:text-left">
              Featured Listings <span className="text-navy-950/40 mx-1">|</span> 精选房源
            </h2>
            <p className="text-sm text-navy-950/60 mt-2 text-center md:text-left">
              Latest properties in the most sought-after neighbourhoods.
            </p>
          </div>
          <a href="#" className="text-sm text-gold-600 hover:text-gold-700 inline-flex items-center gap-1.5">
            View All Listings <Icon name="arrow" size={14} />
          </a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
