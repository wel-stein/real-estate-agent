import Icon from './Icon'

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <h2 className="section-title">
          About Miko <span className="text-navy-950/40 mx-1">|</span> 关于 Miko
        </h2>
        <div className="section-title-accent" />
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-navy-950/75 leading-relaxed">
            <p>
              With years of experience in the Johor Bahru property scene, I specialise in connecting
              buyers, sellers, and tenants with their ideal properties in prime locations like Bukit
              Indah, Mount Austin, Taman Molek &amp; beyond.
            </p>
            <p className="text-navy-950/70">
              我在新山房地产市场有多年经验，专注于在 Bukit Indah、Mount Austin、Taman Molek
              等热门地区，为买家、卖家与租客匹配理想房源。
            </p>
            <p className="text-sm text-navy-950/60">
              <span className="font-medium text-navy-950">Focus:</span> Rent &amp; Sale <span className="mx-1">|</span> 出租 &amp; 出售
            </p>
            <div className="pt-2">
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
          </div>
          <div className="grid grid-cols-2 gap-4">
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
      </div>
    </section>
  )
}
