import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import FeaturedListings from '../components/FeaturedListings'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedListings />
      <Testimonials />
      <Contact />
    </>
  )
}
