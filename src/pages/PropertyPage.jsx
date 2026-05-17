import { useParams, Link } from 'react-router-dom'
import Icon from '../components/Icon'
import PropertyGallery from '../components/PropertyGallery'
import ScheduleViewing from '../components/ScheduleViewing'
import MapPlaceholder from '../components/MapPlaceholder'
import { properties, agent } from '../data/properties'

function Stat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-cream-200 bg-cream-50 px-4 py-3">
      <span className="w-9 h-9 grid place-items-center rounded-md bg-gold-500/10 text-gold-600 shrink-0">
        <Icon name={icon} size={18} />
      </span>
      <div className="leading-tight">
        <p className="text-sm font-semibold text-navy-950">{value}</p>
        <p className="text-xs text-navy-950/55">{label}</p>
      </div>
    </div>
  )
}

export default function PropertyPage() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === id) || properties[0]
  const priceText = `RM ${property.price.toLocaleString()}`

  return (
    <div className="bg-white pb-24 md:pb-0">
      <div className="container-px mx-auto max-w-7xl py-6 md:py-10">
        <Link to="/listings" className="hidden md:inline-flex items-center gap-1.5 text-sm text-navy-950/60 hover:text-navy-950 mb-5">
          <span className="rotate-180 inline-block"><Icon name="arrow" size={14} /></span> Back to listings
        </Link>

        <PropertyGallery property={property} />

        {/* Mobile price + heading block */}
        <div className="mt-5 md:hidden">
          <p className="text-2xl font-semibold text-navy-950">{priceText}</p>
          <h1 className="font-serif text-2xl mt-2 leading-snug">
            {property.name}
            <span className="text-navy-950/40 ml-1">| {property.nameCn}</span>
          </h1>
          <p className="mt-1.5 text-xs text-navy-950/60 inline-flex items-center gap-1">
            <Icon name="pin" size={14} /> {property.location}
          </p>
          <a href="#schedule" className="btn-gold w-full mt-4">
            <Icon name="calendar" size={16} /> Schedule Viewing <span className="opacity-70">| 预约看房</span>
          </a>
          <a href="#virtual" className="mt-2 inline-flex items-center gap-1.5 text-xs text-gold-600">
            <Icon name="globe" size={14} /> Virtual Tour <span className="text-navy-950/40">| 虚拟看房</span>
          </a>
          <div className="grid grid-cols-2 gap-2.5 mt-5">
            <Stat icon="bed" value={`${property.bedrooms} bedrooms`} label="卧室" />
            <Stat icon="bath" value={`${property.bathrooms} bathrooms`} label="浴室" />
            <Stat icon="ruler" value={`${property.sqft.toLocaleString()} SqFt`} label="建筑面积" />
            <Stat icon="car" value={`${property.carparks} Carparks`} label="停车位" />
          </div>
        </div>

        {/* Desktop body: 2-column */}
        <div className="mt-8 md:grid md:grid-cols-[1fr_360px] md:gap-10">
          <div>
            {/* Desktop title block */}
            <div className="hidden md:block mb-6">
              <h1 className="font-serif text-3xl lg:text-4xl leading-tight">
                {property.title || property.name}
                <span className="text-navy-950/40 ml-2 text-2xl">| {property.titleCn || property.nameCn}</span>
              </h1>
              <p className="mt-2 text-sm text-navy-950/60 inline-flex items-center gap-1.5">
                <Icon name="pin" size={14} /> {property.location}
              </p>
              <p className="mt-3 text-2xl font-semibold text-gold-600">{priceText}</p>
              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                <Stat icon="bed" value={property.bedrooms} label="Bedrooms" />
                <Stat icon="bath" value={property.bathrooms} label="Bathrooms" />
                <Stat icon="ruler" value={`${property.sqft.toLocaleString()} SqFt`} label="Built-up" />
                <Stat icon="shield" value={property.tenure} label="Tenure" />
              </div>
            </div>

            {/* Description */}
            <section>
              <h2 className="font-serif text-xl">
                Description <span className="text-navy-950/40 text-base">| 物业描述</span>
              </h2>
              <div className="mt-2 h-0.5 w-10 bg-gold-500" />
              <p className="mt-4 text-sm text-navy-950/75 leading-relaxed">{property.description}</p>
              {property.descriptionCn && (
                <p className="mt-3 text-sm text-navy-950/65 leading-relaxed">{property.descriptionCn}</p>
              )}
            </section>

            {/* Features */}
            {property.features.length > 0 && (
              <section className="mt-8">
                <h2 className="font-serif text-xl">
                  Key Features <span className="text-navy-950/40 text-base">| 主要特点</span>
                </h2>
                <div className="mt-2 h-0.5 w-10 bg-gold-500" />
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {property.features.map((f) => (
                    <div key={f.label} className="flex items-center gap-3 rounded-lg border border-cream-200 bg-cream-50 px-4 py-3">
                      <span className="w-8 h-8 grid place-items-center rounded-md bg-gold-500/10 text-gold-600">
                        <Icon name={f.icon} size={16} />
                      </span>
                      <div className="leading-tight">
                        <p className="text-sm font-medium text-navy-950">{f.label}</p>
                        <p className="text-xs text-navy-950/50">{f.labelCn}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Location */}
            <section className="mt-8">
              <h2 className="font-serif text-xl">
                Location <span className="text-navy-950/40 text-base">| 地点</span>
              </h2>
              <div className="mt-2 h-0.5 w-10 bg-gold-500" />
              <div className="mt-4">
                <MapPlaceholder label={property.locationShort} />
                <p className="mt-3 text-xs text-navy-950/55 inline-flex items-center gap-1.5">
                  <Icon name="pin" size={14} /> {property.location}
                </p>
              </div>
            </section>

            {/* Mobile listed-by */}
            <section className="mt-8 md:hidden">
              <h2 className="font-serif text-xl">
                Listed By <span className="text-navy-950/40 text-base">| 房产代理</span>
              </h2>
              <div className="mt-2 h-0.5 w-10 bg-gold-500" />
              <div className="mt-4 flex items-center gap-4 rounded-xl border border-cream-200 bg-cream-50 p-4">
                <img src={agent.photo} alt={agent.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-white" />
                <div>
                  <p className="font-semibold text-navy-950">{agent.name}</p>
                  <p className="text-xs text-navy-950/55">{agent.role}</p>
                  <p className="text-xs text-navy-950/60 mt-1.5 italic">"{agent.blurb}"</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar — schedule viewing (desktop) */}
          <aside id="schedule" className="hidden md:block">
            <div className="sticky top-6">
              <ScheduleViewing />
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile sticky action bar */}
      <div className="fixed bottom-0 inset-x-0 md:hidden bg-white border-t border-cream-200 grid grid-cols-2 gap-2 p-3 shadow-elevated z-20">
        <a href={`tel:${agent.phone}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-950 text-navy-950 py-3 text-sm font-medium">
          <Icon name="phone" size={16} /> Call
        </a>
        <a
          href={`https://wa.me/${agent.whatsapp.replace(/[^0-9]/g, '')}`}
          className="btn-whatsapp py-3 text-sm"
        >
          <Icon name="whatsapp" size={16} /> WhatsApp
        </a>
      </div>
    </div>
  )
}
