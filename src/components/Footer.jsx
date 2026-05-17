import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70 mt-0">
      <div className="container-px mx-auto max-w-7xl py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="font-serif text-2xl text-white tracking-wide">Miko</div>
        <p className="text-xs text-white/50 text-center">
          © {new Date().getFullYear()} Miko Real Estate. All rights reserved.
          <span className="hidden md:inline"> | </span>
          <br className="md:hidden" />
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </p>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="w-8 h-8 grid place-items-center rounded-full border border-white/15 hover:border-gold-400 hover:text-white">
            <Icon name="facebook" size={14} />
          </a>
          <a href="#" aria-label="Instagram" className="w-8 h-8 grid place-items-center rounded-full border border-white/15 hover:border-gold-400 hover:text-white">
            <Icon name="instagram" size={14} />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-8 h-8 grid place-items-center rounded-full border border-white/15 hover:border-gold-400 hover:text-white">
            <Icon name="linkedin" size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
