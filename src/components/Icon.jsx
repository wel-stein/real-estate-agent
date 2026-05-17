const paths = {
  bed: (
    <>
      <path d="M3 18v-4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4" />
      <path d="M3 18h18" />
      <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M7 11v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" />
      <path d="M13 11v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1" />
    </>
  ),
  bath: (
    <>
      <path d="M4 12h16" />
      <path d="M5 12v4a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4" />
      <path d="M7 12V7a2 2 0 0 1 4 0" />
      <path d="M6 19l-1 2" />
      <path d="M18 19l1 2" />
    </>
  ),
  ruler: (
    <>
      <path d="M3 8h18v8H3z" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </>
  ),
  car: (
    <>
      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
      <path d="M3 16v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-1a2 2 0 0 1-2-2H7a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1Z" />
      <circle cx="7.5" cy="14.5" r="1" />
      <circle cx="16.5" cy="14.5" r="1" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s-7-7.3-7-12a7 7 0 1 1 14 0c0 4.7-7 12-7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  security: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
      <circle cx="12" cy="11" r="1.5" />
      <path d="M12 13v3" />
    </>
  ),
  sofa: (
    <>
      <path d="M3 12a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3h10v-3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v5H3v-5Z" />
      <path d="M6 10V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2" />
      <path d="M3 18v2M21 18v2" />
    </>
  ),
  kitchen: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="M4 12h16" />
      <circle cx="9" cy="8" r="1" />
      <circle cx="15" cy="8" r="1" />
      <path d="M9 16h6" />
    </>
  ),
  check: (
    <>
      <path d="M5 12l5 5 9-10" />
    </>
  ),
  home: (
    <>
      <path d="M3 10l9-7 9 7" />
      <path d="M5 10v9h14v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="14" r="3.5" />
      <path d="M10.5 12.5L20 3" />
      <path d="M17 5l2 2" />
      <path d="M14 8l2 2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V4h8l9 9-8 8-9-9Z" />
      <circle cx="8" cy="8" r="1.2" />
    </>
  ),
  star: (
    <path d="M12 3l2.7 5.7 6.3.7-4.7 4.3 1.3 6.2L12 16.9 6.4 19.9 7.7 13.7 3 9.4l6.3-.7L12 3z" />
  ),
  quote: (
    <>
      <path d="M7 7h4v6H7zM5 13v4h4v-4M13 7h4v6h-4zM11 13v4h4v-4" />
    </>
  ),
  phone: (
    <path d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20 12a8 8 0 1 1-3.4-6.5L20 4l-1.4 3.4A8 8 0 0 1 20 12Z" />
      <path d="M8.5 9.5c.3 2.5 3 5.2 5.5 5.5l1.4-1.5-2-1-1 .8c-.8-.4-1.6-1.2-2-2l.8-1-1-2-1.5 1.4Z" />
    </>
  ),
  wechat: (
    <>
      <path d="M9 5a6 6 0 0 0-6 6c0 2 1 3.7 2.5 4.7L5 18l2.7-1.3A6 6 0 0 0 9 17" />
      <path d="M15 9a6 6 0 0 1 6 6c0 1.5-.7 2.9-1.8 4l.3 1.7L17 19.7a6 6 0 0 1-2 .3 6 6 0 0 1-6-6" />
      <circle cx="7" cy="10" r=".7" />
      <circle cx="11" cy="10" r=".7" />
      <circle cx="14" cy="14" r=".7" />
      <circle cx="18" cy="14" r=".7" />
    </>
  ),
  arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
  facebook: (
    <path d="M13 22v-8h2.7l.4-3.1H13V8.9c0-.9.2-1.5 1.5-1.5h1.7V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7v3.1h2.6V22H13z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  language: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 5h8v5a4 4 0 0 1-8 0V5Z" />
      <path d="M8 7H5a2 2 0 0 0 0 4h3M16 7h3a2 2 0 0 1 0 4h-3" />
      <path d="M9 14l-1 5h8l-1-5" />
    </>
  ),
  star_filled: (
    <path
      d="M12 3l2.7 5.7 6.3.7-4.7 4.3 1.3 6.2L12 16.9 6.4 19.9 7.7 13.7 3 9.4l6.3-.7L12 3z"
      fill="currentColor"
    />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18" />
    </>
  ),
}

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.6 }) {
  const node = paths[name]
  if (!node) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {node}
    </svg>
  )
}
