import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import ListingsTeaser from '../components/ListingsTeaser'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ListingsTeaser />
      <Testimonials />
      <Contact />
    </>
  )
}
