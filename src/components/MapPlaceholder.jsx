import Icon from './Icon'

export default function MapPlaceholder({ label }) {
  return (
    <div className="relative aspect-[16/7] rounded-xl overflow-hidden border border-cream-200 bg-[#e8eef2]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 175"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#d6dee5" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="400" height="175" fill="url(#grid)" />
        <path d="M0 60 L120 50 L200 90 L300 70 L400 110" stroke="#bcd2c9" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.8" />
        <path d="M0 130 L100 120 L180 140 L260 120 L400 150" stroke="#d8e6df" strokeWidth="10" fill="none" strokeLinecap="round" />
        <circle cx="80" cy="40" r="22" fill="#cfe2d8" />
        <circle cx="330" cy="40" r="28" fill="#cfe2d8" />
        <rect x="150" y="20" width="40" height="30" rx="3" fill="#d8c9b3" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex flex-col items-center gap-2 text-navy-950">
          <span className="w-10 h-10 rounded-full bg-gold-500 text-white grid place-items-center shadow-elevated animate-pulse">
            <Icon name="pin" size={20} />
          </span>
          {label && (
            <span className="text-xs px-2.5 py-1 bg-white/95 rounded-md shadow-sm font-medium">
              {label}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
