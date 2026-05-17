import { useState } from 'react'
import Icon from './Icon'

export default function PropertyGallery({ property }) {
  const [active, setActive] = useState(0)
  const thumbs = property.images.slice(0, 4)

  return (
    <div className="grid md:grid-cols-[1.6fr_1fr] gap-3">
      <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-xl overflow-hidden bg-cream-100">
        <img
          src={property.images[active] || property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-green-600 text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Available
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
            <Icon name="calendar" size={12} /> {property.available}
          </span>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-1 grid-rows-3 gap-3">
        {thumbs.slice(1, 4).map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i + 1)}
            className={`relative rounded-xl overflow-hidden bg-cream-100 ${active === i + 1 ? 'ring-2 ring-gold-500' : ''}`}
          >
            <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      <div className="flex gap-2 overflow-x-auto md:hidden -mt-1">
        {thumbs.slice(1, 4).map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i + 1)}
            className={`w-24 h-16 flex-shrink-0 rounded-md overflow-hidden bg-cream-100 ${active === i + 1 ? 'ring-2 ring-gold-500' : ''}`}
          >
            <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
