import { Coffee, Star } from 'lucide-react'

const products = [
  {
    name: "Эфиопский Эспрессо",
    description: "Насыщенный кофе с нотками диких ягод",
    price: "490₽",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
  },
  {
    name: "Бразильский Раннер",
    description: "Мягкий и шоколадный профиль вкуса",
    price: "420₽",
    image: "https://images.unsplash.com/photo-1523242942815-1ded7833836b?w=800&q=80"
  },
  {
    name: "Колумбийский Блюз",
    description: "Сбалансированный с легкой кислинкой",
    price: "450₽",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80"
  }
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-coffee-950 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Наши <span className="text-amber-500">кофейные сорта</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-coffee-900 border border-coffee-800 rounded-xl overflow-hidden transform transition hover:scale-105"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
                <p className="text-coffee-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-500">{product.price}</span>
                  <button className="bg-amber-500 text-coffee-900 px-4 py-2 rounded-full hover:bg-amber-600 transition flex items-center space-x-2">
                    <Coffee className="w-5 h-5" />
                    <span>Купить</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}