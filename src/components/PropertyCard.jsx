import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function PropertyCard({ property }) {
  const priceText = `RM ${property.price.toLocaleString()}`
  return (
    <article className="bg-white rounded-xl overflow-hidden border border-cream-200 shadow-card hover:shadow-elevated transition-shadow flex flex-col">
      <Link to={`/property/${property.id}`} className="block aspect-[5/3] overflow-hidden bg-cream-100">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-lg text-navy-950">
          {property.name}
          <span className="text-navy-950/40 text-sm font-sans ml-1">| {property.nameCn}</span>
        </h3>
        <p className="mt-1 inline-flex items-center text-xs text-navy-950/60 gap-1">
          <Icon name="pin" size={14} />
          {property.locationShort}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-navy-950/70">
          <span className="inline-flex items-center gap-1.5"><Icon name="bed" size={15} /> {property.bedrooms}</span>
          <span className="inline-flex items-center gap-1.5"><Icon name="bath" size={15} /> {property.bathrooms}</span>
          <span className="inline-flex items-center gap-1.5"><Icon name="ruler" size={15} /> {property.sqft.toLocaleString()} sqft</span>
        </div>
        <div className="mt-4 pt-4 border-t border-cream-200 flex items-center justify-between">
          <p className="font-semibold text-navy-950">{priceText}</p>
        </div>
        <Link
          to={`/property/${property.id}`}
          className="mt-4 btn-gold w-full text-sm py-2.5"
        >
          Enquire Now <span className="opacity-70">| 立即咨询</span>
        </Link>
      </div>
    </article>
  )
}
