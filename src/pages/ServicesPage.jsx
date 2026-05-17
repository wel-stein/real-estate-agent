import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { services } from '../data/properties'

const serviceDetails = {
  'Property for Sale': [
    'Professional photography & listing copy',
    'Pricing strategy backed by market data',
    'Targeted marketing across portals & social',
    'Viewing arrangement and negotiation',
  ],
  'Property for Rent': [
    'Tenant screening & background checks',
    'Tenancy agreement preparation',
    'Move-in inspection & handover',
    'Optional ongoing tenancy management',
  ],
  'Looking to Buy': [
    'Personalised property shortlist',
    'Accompanied viewings across JB',
    'Loan referral to trusted bankers',
    'Sale & purchase agreement guidance',
  ],
  'Looking to Rent': [
    'Curated rental shortlist within budget',
    'Lease term negotiation on your behalf',
    'Move-in coordination & utilities setup',
    'Bilingual support throughout',
  ],
}

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    titleCn: '初步沟通',
    desc: 'A short call to understand your goals, budget, timeline, and preferred areas.',
  },
  {
    num: '02',
    title: 'Tailored Shortlist',
    titleCn: '定制清单',
    desc: 'I curate properties (or buyers/tenants) that genuinely match your brief — no spam.',
  },
  {
    num: '03',
    title: 'Viewings & Negotiation',
    titleCn: '看房与谈判',
    desc: 'Accompanied viewings, honest feedback, and firm negotiation on your behalf.',
  },
  {
    num: '04',
    title: 'Close & Handover',
    titleCn: '成交与交付',
    desc: 'Paperwork, banker referrals, move-in coordination — I see it through to the keys.',
  },
]

const faqs = [
  {
    q: 'Do you charge buyers or tenants a fee?',
    a: 'No. As per Malaysian practice, my commission is paid by the seller or landlord. Buyer and tenant consultation is free.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'All of Johor Bahru — including Bukit Indah, Mount Austin, Taman Molek, JB Town, Iskandar Puteri, and surrounding districts.',
  },
  {
    q: 'How quickly will you reply?',
    a: 'Same-day, usually within the hour during office hours (Mon–Sat, 9am–7pm MYT). WhatsApp is fastest.',
  },
  {
    q: 'Can you help with mortgage and legal?',
    a: 'Yes — I can refer you to trusted bankers and conveyancing lawyers I work with regularly. You make the final choice.',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white">
        <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
          <nav className="text-xs text-white/55 flex items-center gap-1.5 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">
            Our Services
            <span className="text-gold-400 ml-2">| 专业服务</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            Whether you're buying, selling, or renting in Johor Bahru, I provide a
            personal, bilingual service from first call to keys in hand.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-white rounded-xl border border-cream-200 p-6 md:p-7 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 grid place-items-center rounded-lg bg-gold-500/10 text-gold-600 shrink-0">
                  <Icon name={s.icon} size={22} />
                </span>
                <div>
                  <h2 className="font-serif text-xl text-navy-950">{s.title}</h2>
                  <p className="text-xs text-navy-950/50 mt-0.5">{s.titleCn}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-navy-950/70 leading-relaxed">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {(serviceDetails[s.title] || []).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy-950/75">
                    <Icon name="check" size={16} className="text-gold-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
          <h2 className="section-title">
            How It Works <span className="text-navy-950/40 mx-1">|</span> 服务流程
          </h2>
          <div className="section-title-accent" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl border border-cream-200 p-6 shadow-card">
                <p className="font-serif text-3xl text-gold-500">{step.num}</p>
                <h3 className="font-serif text-lg mt-3 text-navy-950">{step.title}</h3>
                <p className="text-xs text-navy-950/50">{step.titleCn}</p>
                <p className="mt-3 text-sm text-navy-950/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">
              FAQs <span className="text-navy-950/40 text-xl">| 常见问题</span>
            </h2>
            <div className="mt-2 h-0.5 w-10 bg-gold-500" />
            <p className="mt-4 text-sm text-navy-950/65 max-w-xs">
              Have a question that isn't here? WhatsApp me — I'll get back to you the same day.
            </p>
          </div>
          <div className="divide-y divide-cream-200 border-y border-cream-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="font-medium text-navy-950">{f.q}</span>
                  <span className="w-7 h-7 grid place-items-center rounded-full border border-cream-200 text-navy-950/60 group-open:bg-gold-500 group-open:text-white group-open:border-gold-500 transition-colors shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M6 9l6 6 6-6" className="transition-transform group-open:rotate-180 origin-center" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-navy-950/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 text-white">
        <div className="container-px mx-auto max-w-7xl py-12 md:py-16 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl">Not sure which service you need?</h3>
            <p className="text-sm text-white/70 mt-2">
              Tell me your situation and I'll point you in the right direction — no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold">
              Contact Miko <Icon name="arrow" size={16} />
            </Link>
            <Link to="/listings" className="btn-outline-light">
              Browse Listings
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
