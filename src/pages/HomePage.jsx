import Hero from '../components/Hero'
import Services from '../components/Services'
import ListingsTeaser from '../components/ListingsTeaser'
import Testimonials from '../components/Testimonials'
import ContactTeaser from '../components/ContactTeaser'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ListingsTeaser />
      <Testimonials />
      <ContactTeaser />
    </>
  )
}
