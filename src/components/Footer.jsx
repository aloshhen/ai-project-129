import { Coffee, Telegram, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-coffee-950 py-16 px-4 border-t border-coffee-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <Coffee className="text-amber-500 w-10 h-10" />
            <h3 className="text-2xl font-bold">Coffee Ecosystem</h3>
          </div>
          <p className="text-coffee-300">
            Инновационная платформа для настоящих кофейных энтузиастов. Технологии и вкус в каждой чашке.
          </p>
        </div>
        
        <div className="md:text-center">
          <h4 className="text-xl font-bold mb-6 text-white">Быстрые ссылки</h4>
          <ul className="space-y-4">
            <li><a href="#hero" className="text-coffee-300 hover:text-amber-500">Главная</a></li>
            <li><a href="#features" className="text-coffee-300 hover:text-amber-500">Возможности</a></li>
            <li><a href="#products" className="text-coffee-300 hover:text-amber-500">Продукты</a></li>
            <li><a href="#testimonials" className="text-coffee-300 hover:text-amber-500">Отзывы</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-6 text-white">Следите за нами</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-coffee-300 hover:text-amber-500">
              <Telegram className="w-8 h-8" />
            </a>
            <a href="#" className="text-coffee-300 hover:text-amber-500">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-coffee-300 hover:text-amber-500">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 pt-8 border-t border-coffee-800">
        <p className="text-coffee-400">© 2024 Coffee Ecosystem. Все права защищены.</p>
      </div>
    </footer>
  )
}