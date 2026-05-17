import { Link } from 'react-router-dom'
import { agent } from '../data/properties'

const LAST_UPDATED = '17 May 2026'

const sections = [
  {
    heading: '1. Acceptance of Terms',
    headingCn: '条款接受',
    body: (
      <p>
        By accessing or using the Miko Real Estate website ("the Site"), you
        agree to be bound by these Terms of Service. If you do not agree, please
        do not use the Site.
      </p>
    ),
  },
  {
    heading: '2. About Our Services',
    headingCn: '关于我们的服务',
    body: (
      <p>
        Miko Real Estate provides property advisory, buying, selling, and
        rental brokerage services in Johor Bahru, Malaysia. All transactions are
        subject to a separate written agreement and the relevant Malaysian laws
        and regulations governing real estate practice.
      </p>
    ),
  },
  {
    heading: '3. Property Information',
    headingCn: '房源信息',
    body: (
      <>
        <p>
          Property details on this Site — including prices, sizes, photos, and
          availability — are provided in good faith based on information from
          owners and developers. We make reasonable efforts to keep listings
          accurate but cannot guarantee that all information is current or
          error-free.
        </p>
        <p>
          You should always verify property details, conduct your own due
          diligence, and inspect properties in person before making any decision
          or commitment.
        </p>
      </>
    ),
  },
  {
    heading: '4. Listings & Availability',
    headingCn: '房源与可用性',
    body: (
      <p>
        Listings may be updated, withdrawn, or sold/rented at any time without
        notice. Inclusion of a property on the Site does not constitute an offer
        or guarantee of availability.
      </p>
    ),
  },
  {
    heading: '5. Fees & Commission',
    headingCn: '费用与佣金',
    body: (
      <>
        <p>
          In accordance with standard Malaysian real estate practice,
          consultation with buyers and tenants is free of charge. Our commission
          is paid by the seller or landlord upon successful conclusion of a
          transaction, as defined in the relevant agreement.
        </p>
        <p>
          We will always be transparent about fees before any binding commitment.
        </p>
      </>
    ),
  },
  {
    heading: '6. User Responsibilities',
    headingCn: '用户责任',
    body: (
      <>
        <p>By using the Site, you agree:</p>
        <ul>
          <li>To provide accurate information when contacting us</li>
          <li>Not to use the Site for any unlawful or fraudulent purpose</li>
          <li>Not to scrape, copy, or republish listings without permission</li>
          <li>Not to misuse contact details (e.g. spam or unsolicited marketing)</li>
        </ul>
      </>
    ),
  },
  {
    heading: '7. Intellectual Property',
    headingCn: '知识产权',
    body: (
      <p>
        All content on the Site — including text, design, logos, photographs,
        and copy — is the property of Miko Real Estate or its licensors, and is
        protected by applicable copyright and trademark laws. You may not
        reproduce or redistribute content without prior written consent.
      </p>
    ),
  },
  {
    heading: '8. Third-Party Links',
    headingCn: '第三方链接',
    body: (
      <p>
        The Site may contain links to third-party websites or services (for
        example, WhatsApp, mortgage providers). We are not responsible for the
        content or practices of those sites. Their use is governed by their own
        terms and privacy policies.
      </p>
    ),
  },
  {
    heading: '9. Limitation of Liability',
    headingCn: '责任限制',
    body: (
      <p>
        To the maximum extent permitted by law, Miko Real Estate is not liable
        for any indirect, incidental, or consequential loss arising from use of
        the Site or reliance on its information. Nothing in these Terms limits
        liability that cannot be lawfully excluded.
      </p>
    ),
  },
  {
    heading: '10. Governing Law',
    headingCn: '适用法律',
    body: (
      <p>
        These Terms are governed by the laws of Malaysia. Any dispute arising
        from or in connection with these Terms or use of the Site shall be
        subject to the exclusive jurisdiction of the Malaysian courts.
      </p>
    ),
  },
  {
    heading: '11. Changes to These Terms',
    headingCn: '条款变更',
    body: (
      <p>
        We may update these Terms from time to time. Material changes will be
        reflected by the "Last updated" date at the top of this page. Continued
        use of the Site after changes are posted constitutes acceptance of the
        updated Terms.
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white">
        <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
          <nav className="text-xs text-white/55 flex items-center gap-1.5 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">
            Terms of Service
            <span className="text-gold-400 ml-2">| 服务条款</span>
          </h1>
          <p className="text-white/60 mt-4 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-3xl py-12 md:py-16">
        <div className="space-y-8 text-navy-950/80 leading-relaxed">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-xl md:text-2xl text-navy-950">
                {s.heading}
                <span className="text-navy-950/40 ml-2 text-base">| {s.headingCn}</span>
              </h2>
              <div className="mt-1.5 h-0.5 w-8 bg-gold-500" />
              <div className="mt-4 text-sm md:text-[15px] space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:text-navy-950/75">
                {s.body}
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-cream-200 bg-cream-50 p-6">
            <h2 className="font-serif text-xl text-navy-950">
              12. Contact
              <span className="text-navy-950/40 ml-2 text-base">| 联系方式</span>
            </h2>
            <p className="mt-3 text-sm md:text-[15px] text-navy-950/75">
              Questions about these Terms? Reach out anytime:
            </p>
            <ul className="mt-3 text-sm text-navy-950/80 space-y-1">
              <li><span className="text-navy-950/55">Email:</span> <a href={`mailto:${agent.email}`} className="text-gold-600 hover:text-gold-700">{agent.email}</a></li>
              <li><span className="text-navy-950/55">Phone:</span> <a href={`tel:${agent.phone}`} className="text-gold-600 hover:text-gold-700">{agent.phone}</a></li>
            </ul>
            <Link to="/contact" className="btn-outline-gold mt-5 text-sm py-2.5">
              Go to Contact Page
            </Link>
          </div>

          <p className="text-xs text-navy-950/45 pt-6 border-t border-cream-200">
            This page is provided for general information and does not
            constitute legal advice. For specific concerns, please consult a
            qualified professional.
          </p>
        </div>
      </section>
    </div>
  )
}
