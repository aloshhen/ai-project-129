import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-coffee-900 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App