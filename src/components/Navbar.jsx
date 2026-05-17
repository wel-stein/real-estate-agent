import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About', route: true },
  { to: '/#services', label: 'Services' },
  { to: '/listings', label: 'Listings', route: true },
  { to: '/contact', label: 'Contact', route: true },
]

export default function Navbar({ variant = 'dark' }) {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('EN')

  const isDark = variant === 'dark'
  const wrapCls = isDark ? 'bg-navy-950 text-white' : 'bg-white text-navy-950 border-b border-cream-200'
  const linkCls = isDark
    ? 'text-white/80 hover:text-white'
    : 'text-navy-950/70 hover:text-navy-950'

  return (
    <header className={`${wrapCls} relative z-30`}>
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-serif text-xl md:text-2xl tracking-wide">
          Miko
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) =>
            l.route ? (
              <Link key={l.to} to={l.to} className={`${linkCls} transition-colors`}>
                {l.label}
              </Link>
            ) : (
              <a key={l.to} href={l.to} className={`${linkCls} transition-colors`}>
                {l.label}
              </a>
            )
          )}
        </nav>
        <div className="flex items-center gap-3">
          <div
            className={`hidden md:flex items-center text-xs rounded-full overflow-hidden border ${
              isDark ? 'border-white/20' : 'border-cream-200'
            }`}
          >
            {['EN', '中文'].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 transition-colors ${
                  lang === code
                    ? isDark
                      ? 'bg-white text-navy-950'
                      : 'bg-navy-950 text-white'
                    : isDark
                    ? 'text-white/70 hover:text-white'
                    : 'text-navy-950/70 hover:text-navy-950'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border ${
              isDark ? 'border-white/20 text-white' : 'border-cream-200 text-navy-950'
            }`}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className={`md:hidden border-t ${isDark ? 'border-white/10' : 'border-cream-200'}`}>
          <div className="container-px py-3 flex flex-col gap-1 text-sm">
            {links.map((l) =>
              l.route ? (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`${linkCls} py-2`}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className={`${linkCls} py-2`}
                >
                  {l.label}
                </a>
              )
            )}
            <div className={`mt-2 flex w-fit rounded-full overflow-hidden border ${
              isDark ? 'border-white/20' : 'border-cream-200'
            }`}>
              {['EN', '中文'].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1.5 text-xs transition-colors ${
                    lang === code
                      ? isDark ? 'bg-white text-navy-950' : 'bg-navy-950 text-white'
                      : isDark ? 'text-white/70' : 'text-navy-950/70'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
