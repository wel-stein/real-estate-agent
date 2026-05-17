import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { agent } from '../data/properties'

const milestones = [
  { year: '2017', title: 'Started in real estate', desc: 'Joined a JB agency as a junior negotiator.' },
  { year: '2019', title: 'Top performer', desc: 'Closed RM 12M+ in residential transactions.' },
  { year: '2022', title: 'Senior Negotiator', desc: 'Promoted and expanded into commercial.' },
  { year: 'Today', title: '8+ years serving JB', desc: '300+ happy buyers, sellers, and tenants.' },
]

const stats = [
  { value: '8+', label: 'Years experience' },
  { value: '300+', label: 'Clients served' },
  { value: 'RM 80M+', label: 'In transactions' },
  { value: '4.9 / 5', label: 'Client rating' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white">
        <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
          <nav className="text-xs text-white/55 flex items-center gap-1.5 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </nav>
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-4">
                Meet your agent
              </p>
              <h1 className="font-serif text-4xl md:text-5xl leading-tight">
                About <span className="text-gold-400">{agent.name}</span>
                <span className="text-white/40 ml-2 text-3xl">| 关于 Miko</span>
              </h1>
              <p className="mt-5 text-white/75 leading-relaxed max-w-xl">
                A trusted Johor Bahru property partner with a personal,
                bilingual approach. Helping families find the right home
                and investors find the right return — one deal at a time.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-elevated max-w-xs md:ml-auto w-full">
              <img
                src={agent.photo}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute left-4 bottom-4 right-4 bg-gold-500 text-white rounded-lg px-4 py-3 shadow-card">
                <p className="text-2xl font-semibold leading-none">{agent.experienceYears}+ Years</p>
                <p className="text-xs mt-1 opacity-90">Experience of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">My Story <span className="text-navy-950/40 text-xl">| 我的故事</span></h2>
            <div className="mt-2 h-0.5 w-10 bg-gold-500" />
            <div className="mt-5 space-y-4 text-navy-950/75 leading-relaxed">
              <p>
                With years of experience in the Johor Bahru property scene, I specialise in connecting
                buyers, sellers, and tenants with their ideal properties in prime locations like Bukit
                Indah, Mount Austin, Taman Molek &amp; beyond.
              </p>
              <p>
                Whether you're a first-time buyer, a seasoned investor, or relocating to JB, I take the
                time to understand your goals — and only recommend properties I'd be happy to live in
                or invest in myself.
              </p>
              <p className="text-navy-950/65">
                我在新山房地产市场有多年经验，专注于在 Bukit Indah、Mount Austin、Taman Molek
                等热门地区，为买家、卖家与租客匹配理想房源。无论您是首次置业、资深投资者还是搬迁至
                新山，我都会用心了解您的需求，只推荐我自己也乐于居住或投资的物业。
              </p>
            </div>

            <div className="mt-7">
              <p className="text-sm font-medium text-navy-950 mb-2">
                Languages <span className="text-navy-950/40">| 语言</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {['English', 'Chinese 中文', 'Malay 马来语'].map((l) => (
                  <span key={l} className="text-xs px-3 py-1.5 rounded-full border border-cream-200 bg-cream-50 text-navy-950/80">
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-cream-200 bg-cream-50 p-5">
                <div className="w-10 h-10 grid place-items-center rounded-lg bg-gold-500/10 text-gold-600 mb-3">
                  <Icon name="shield" size={20} />
                </div>
                <p className="font-semibold text-navy-950">Trusted</p>
                <p className="text-xs text-navy-950/60 mt-1">Backed by client reviews</p>
              </div>
              <div className="rounded-xl border border-cream-200 bg-cream-50 p-5">
                <div className="w-10 h-10 grid place-items-center rounded-lg bg-gold-500/10 text-gold-600 mb-3">
                  <Icon name="trophy" size={20} />
                </div>
                <p className="font-semibold text-navy-950">Expert</p>
                <p className="text-xs text-navy-950/60 mt-1">Local JB market knowledge</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl md:text-3xl">By the Numbers <span className="text-navy-950/40 text-xl">| 数据一览</span></h2>
            <div className="mt-2 h-0.5 w-10 bg-gold-500" />
            <div className="mt-5 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-cream-200 bg-cream-50 p-5">
                  <p className="font-serif text-2xl text-navy-950">{s.value}</p>
                  <p className="text-xs text-navy-950/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl md:text-3xl mt-10">Journey <span className="text-navy-950/40 text-xl">| 我的历程</span></h2>
            <div className="mt-2 h-0.5 w-10 bg-gold-500" />
            <ol className="mt-5 relative border-l border-cream-200 pl-5 space-y-5">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-gold-500 ring-4 ring-white" />
                  <p className="text-xs font-medium text-gold-600 tracking-wider uppercase">{m.year}</p>
                  <p className="font-semibold text-navy-950 mt-0.5">{m.title}</p>
                  <p className="text-sm text-navy-950/65">{m.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="container-px mx-auto max-w-7xl py-12 md:py-16 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="font-serif text-2xl text-navy-950">Ready to find your next home?</h3>
            <p className="text-sm text-navy-950/65 mt-2">
              Browse current listings or reach out directly — I reply within the hour.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/listings" className="btn-gold">
              View Listings <Icon name="arrow" size={16} />
            </Link>
            <Link to="/contact" className="btn-outline-gold">
              Contact Miko <span className="opacity-70">| 联系我</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
