import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Анна Петрова",
    role: "UX Designer",
    quote: "Невероятно удобный сервис! Теперь мой утренний кофе всегда идеален.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
  },
  {
    name: "Максим Соколов",
    role: "Предприниматель",
    quote: "Революционный подход к кофейной культуре. Технологично и вкусно!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80"
  },
  {
    name: "Елена Смирнова",
    role: "Маркетолог",
    quote: "Качество и инновации в каждой чашке. Теперь я фанат этой экосистемы!",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=800&q=80"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-coffee-900 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Что о нас <span className="text-amber-500">говорят</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-coffee-950 border border-coffee-800 rounded-xl p-6 transform transition hover:scale-105"
            >
              <Quote className="text-amber-500 w-12 h-12 mb-4 opacity-50" />
              <p className="text-coffee-200 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-coffee-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mt-4 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}