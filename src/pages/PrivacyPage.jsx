import { Link } from 'react-router-dom'
import { agent } from '../data/properties'

const LAST_UPDATED = '17 May 2026'

const sections = [
  {
    heading: '1. Introduction',
    headingCn: '引言',
    body: (
      <>
        <p>
          Miko Real Estate ("we", "our", "us") respects your privacy and is
          committed to protecting your personal data. This Privacy Policy
          explains what information we collect when you use this website or
          enquire about our services, how we use it, and the choices you have.
        </p>
        <p>
          We handle personal data in accordance with Malaysia's Personal Data
          Protection Act 2010 (PDPA).
        </p>
      </>
    ),
  },
  {
    heading: '2. Information We Collect',
    headingCn: '我们收集的信息',
    body: (
      <>
        <p>We only collect information you provide to us directly, including:</p>
        <ul>
          <li>Contact details — name, phone number, email address</li>
          <li>Enquiry details — property interest, budget, preferred areas, message content</li>
          <li>Scheduling details — date and time you request for a viewing</li>
        </ul>
        <p>
          We do not knowingly collect data from anyone under 18. We do not use
          cookies for tracking or advertising.
        </p>
      </>
    ),
  },
  {
    heading: '3. How We Use Your Information',
    headingCn: '信息使用方式',
    body: (
      <>
        <p>Your information is used solely to:</p>
        <ul>
          <li>Respond to your enquiries and arrange property viewings</li>
          <li>Send you property recommendations matching your stated interest</li>
          <li>Provide ongoing client service related to your enquiry</li>
          <li>Comply with legal or regulatory obligations</li>
        </ul>
        <p>
          We will not send you unrelated marketing material, and we will never
          sell your data.
        </p>
      </>
    ),
  },
  {
    heading: '4. Sharing & Disclosure',
    headingCn: '信息共享与披露',
    body: (
      <>
        <p>
          Your information is kept confidential and shared only with parties
          directly involved in your enquiry, such as:
        </p>
        <ul>
          <li>The property owner or landlord (when arranging a viewing)</li>
          <li>Trusted partners (mortgage bankers, lawyers) — only with your prior consent</li>
          <li>Authorities, where required by Malaysian law</li>
        </ul>
      </>
    ),
  },
  {
    heading: '5. Data Retention',
    headingCn: '数据保留',
    body: (
      <p>
        We retain enquiry data for as long as you remain an active client and for
        a reasonable period afterwards (typically 24 months), so we can follow up
        on subsequent property needs. You may request earlier deletion at any
        time.
      </p>
    ),
  },
  {
    heading: '6. Your Rights',
    headingCn: '您的权利',
    body: (
      <>
        <p>Under the PDPA, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Withdraw consent and request deletion of your data</li>
          <li>Lodge a complaint with the Personal Data Protection Commissioner</li>
        </ul>
        <p>To exercise these rights, contact us using the details below.</p>
      </>
    ),
  },
  {
    heading: '7. Security',
    headingCn: '安全保障',
    body: (
      <p>
        Personal data is stored on reputable cloud services with reasonable
        technical and organisational safeguards. While no online transmission is
        ever 100% secure, we take your privacy seriously and review our
        practices regularly.
      </p>
    ),
  },
  {
    heading: '8. Updates to This Policy',
    headingCn: '政策更新',
    body: (
      <p>
        We may update this policy from time to time to reflect changes to our
        practices or legal requirements. The "Last updated" date at the top of
        this page indicates the most recent revision.
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white">
        <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
          <nav className="text-xs text-white/55 flex items-center gap-1.5 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">
            Privacy Policy
            <span className="text-gold-400 ml-2">| 隐私政策</span>
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
              9. Contact Us
              <span className="text-navy-950/40 ml-2 text-base">| 联系我们</span>
            </h2>
            <p className="mt-3 text-sm md:text-[15px] text-navy-950/75">
              For any questions about this policy or your data, please reach out:
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
