import { Link } from 'react-router-dom'
import Icon from './Icon'
import { agent } from '../data/properties'

export default function AboutTeaser() {
  return (
    <section id="about" className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center">
          <div className="relative max-w-sm w-full md:ml-auto">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-right-6 bg-white border border-cream-200 rounded-lg px-4 py-3 shadow-card text-center">
              <p className="font-serif text-2xl text-navy-950 leading-none">{agent.experienceYears}+</p>
              <p className="text-[10px] text-navy-950/55 mt-1 tracking-wider uppercase">Years</p>
            </div>
          </div>

          <div>
            <p className="text-gold-600 text-xs tracking-[0.25em] uppercase mb-3">
              About the Agent
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-950 leading-tight">
              About Miko
              <span className="text-navy-950/40 ml-2 text-2xl">| 关于 Miko</span>
            </h2>
            <p className="mt-4 text-navy-950/70 leading-relaxed max-w-xl">
              A trusted Johor Bahru property partner with a personal,
              bilingual approach — helping families and investors find the
              right home across Bukit Indah, Mount Austin, Taman Molek and beyond.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['English', '中文', '马来语'].map((l) => (
                <span key={l} className="text-xs px-3 py-1.5 rounded-full border border-cream-200 bg-cream-50 text-navy-950/80">
                  {l}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/about" className="btn-gold">
                Read Miko's Story <Icon name="arrow" size={16} />
              </Link>
              <a href="#contact" className="btn-outline-gold">
                Get in Touch <span className="opacity-70">| 联系我</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
