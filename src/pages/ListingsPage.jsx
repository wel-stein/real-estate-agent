import { useMemo, useState } from 'react'
import { properties } from '../data/properties'
import PropertyCard from '../components/PropertyCard'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'

const BEDROOM_OPTIONS = [
  { value: 0, label: 'Any beds' },
  { value: 1, label: '1+ beds' },
  { value: 2, label: '2+ beds' },
  { value: 3, label: '3+ beds' },
  { value: 4, label: '4+ beds' },
  { value: 5, label: '5+ beds' },
]

const PRICE_OPTIONS = [
  { value: 0, label: 'Any price' },
  { value: 500000, label: 'Up to RM 500K' },
  { value: 1000000, label: 'Up to RM 1M' },
  { value: 1500000, label: 'Up to RM 1.5M' },
  { value: 2000000, label: 'Up to RM 2M' },
]

const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'size-desc', label: 'Largest first' },
]

const DEFAULT_FILTERS = {
  query: '',
  bedrooms: 0,
  maxPrice: 0,
  sort: 'recommended',
}

export default function ListingsPage() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    let list = properties.filter((p) => {
      if (filters.bedrooms && p.bedrooms < filters.bedrooms) return false
      if (filters.maxPrice && p.price > filters.maxPrice) return false
      if (q) {
        const hay = [p.name, p.nameCn, p.title, p.titleCn, p.location, p.locationShort, p.tenure]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
    switch (filters.sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case 'size-desc':
        list = [...list].sort((a, b) => b.sqft - a.sqft)
        break
    }
    return list
  }, [filters])

  const isFiltered =
    filters.query !== '' ||
    filters.bedrooms !== 0 ||
    filters.maxPrice !== 0 ||
    filters.sort !== 'recommended'

  const update = (patch) => setFilters((f) => ({ ...f, ...patch }))
  const reset = () => setFilters(DEFAULT_FILTERS)

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

      <section className="container-px mx-auto max-w-7xl py-8 md:py-12">
        <div className="bg-white border border-cream-200 rounded-2xl shadow-card p-4 md:p-5 -mt-12 md:-mt-16 relative z-10">
          <div className="grid gap-3 md:grid-cols-[1.6fr_1fr_1fr_1fr_auto]">
            <label className="relative">
              <span className="sr-only">Search</span>
              <Icon
                name="search"
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-950/40 pointer-events-none"
              />
              <input
                type="search"
                value={filters.query}
                onChange={(e) => update({ query: e.target.value })}
                placeholder="Search by name, area or keyword…"
                className="input-light pl-9"
              />
            </label>

            <label>
              <span className="sr-only">Bedrooms</span>
              <select
                value={filters.bedrooms}
                onChange={(e) => update({ bedrooms: Number(e.target.value) })}
                className="input-light appearance-none"
              >
                {BEDROOM_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>

            <label>
              <span className="sr-only">Max price</span>
              <select
                value={filters.maxPrice}
                onChange={(e) => update({ maxPrice: Number(e.target.value) })}
                className="input-light appearance-none"
              >
                {PRICE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>

            <label>
              <span className="sr-only">Sort</span>
              <select
                value={filters.sort}
                onChange={(e) => update({ sort: e.target.value })}
                className="input-light appearance-none"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={reset}
              disabled={!isFiltered}
              className="inline-flex items-center justify-center gap-1.5 text-sm px-4 py-2.5 rounded-md border border-cream-200 text-navy-950/70 hover:text-navy-950 hover:border-navy-950/30 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3 mt-8 mb-6">
          <p className="text-sm text-navy-950/60">
            {filtered.length === 0
              ? 'No properties match your search'
              : `Showing ${filtered.length} of ${properties.length} ${properties.length === 1 ? 'property' : 'properties'}`}
          </p>
          <Link to="/contact" className="text-sm text-gold-600 hover:text-gold-700 inline-flex items-center gap-1.5">
            Can't find what you need? Ask Miko <Icon name="arrow" size={14} />
          </Link>
        </div>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-cream-200 bg-cream-50 p-12 text-center">
            <div className="mx-auto w-12 h-12 grid place-items-center rounded-full bg-white border border-cream-200 text-navy-950/50 mb-4">
              <Icon name="search" size={20} />
            </div>
            <p className="font-serif text-xl text-navy-950">No matching listings</p>
            <p className="text-sm text-navy-950/60 mt-2 max-w-sm mx-auto">
              Try adjusting your filters, or reach out to Miko for off-market options.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button onClick={reset} className="btn-outline-gold text-sm py-2.5">Reset filters</button>
              <Link to="/contact" className="btn-gold text-sm py-2.5">Contact Miko</Link>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
