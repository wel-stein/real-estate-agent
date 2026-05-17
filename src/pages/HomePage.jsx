import Hero from '../components/Hero'
import AboutTeaser from '../components/AboutTeaser'
import Services from '../components/Services'
import ListingsTeaser from '../components/ListingsTeaser'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <Services />
      <ListingsTeaser />
      <Testimonials />
      <Contact />
    </>
  )
}
