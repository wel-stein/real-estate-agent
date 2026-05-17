import Hero from '../components/Hero'
import ServicesTeaser from '../components/ServicesTeaser'
import ListingsTeaser from '../components/ListingsTeaser'
import Testimonials from '../components/Testimonials'
import ContactTeaser from '../components/ContactTeaser'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <ListingsTeaser />
      <Testimonials />
      <ContactTeaser />
    </>
  )
}
