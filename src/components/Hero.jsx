import Icon from './Icon'
import { agent } from '../data/properties'

export default function Hero() {
  return (
    <section className="bg-navy-950 text-white relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <p className="text-gold-400 text-xs tracking-[0.25em] uppercase mb-5">
            Miko <span className="text-white/40 mx-2">|</span> Property Agent
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-tight">
            Your Trusted Property
            <br />
            Partner in <span className="text-gold-400">Johor Bahru</span>
          </h1>
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-lg">
            您在新山值得信赖的房地产合作伙伴
          </p>
          <p className="mt-3 text-white/60 max-w-lg leading-relaxed">
            Navigating the real estate market with purpose and integrity. Dedicated to finding
            your perfect home or investment.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`https://wa.me/${agent.whatsapp.replace(/[^0-9]/g, '')}`} className="btn-gold">
              <Icon name="whatsapp" size={18} />
              Contact Now <span className="opacity-70">| 联系我</span>
            </a>
            <a href="#listings" className="btn-outline-light">
              View Listings <span className="opacity-70">| 浏览房源</span>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-xl overflow-hidden shadow-elevated">
            <img
              src={agent.photo}
              alt={`${agent.name}, real estate agent`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            <div className="absolute left-4 bottom-4 right-4 md:left-6 md:bottom-6 md:right-auto bg-gold-500 text-white rounded-lg px-4 py-3 shadow-card">
              <p className="text-2xl font-semibold leading-none">{agent.experienceYears}+ Years</p>
              <p className="text-xs mt-1 opacity-90">Experience of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
