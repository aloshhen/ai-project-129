import { Coffee, ShoppingCart, User } from 'lucide-react'

export default function Navigation() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed w-full z-50 bg-coffee-900/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Coffee className="text-amber-500 w-8 h-8" />
          <h1 className="text-xl font-bold">Coffee Ecosystem</h1>
        </div>
        <div className="flex space-x-6">
          <button onClick={() => scrollToSection('features')} className="hover:text-amber-500 transition">
            Возможности
          </button>
          <button onClick={() => scrollToSection('products')} className="hover:text-amber-500 transition">
            Продукты
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-amber-500 transition">
            Отзывы
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="bg-amber-500 text-coffee-900 px-4 py-2 rounded-full hover:bg-amber-600 transition">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="bg-coffee-700 text-white px-4 py-2 rounded-full hover:bg-coffee-600 transition">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}