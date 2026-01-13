import { motion } from 'framer-motion'
import { Coffee, Star, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-coffee-gradient opacity-20 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6 text-white"
        >
          Революция в мире <span className="text-amber-500">кофейной культуры</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-coffee-200 max-w-3xl mx-auto mb-10"
        >
          Инновационная экосистема, которая объединяет технологии, качество и удобство для настоящих кофеманов
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <button className="bg-amber-500 text-coffee-900 px-8 py-3 rounded-full hover:bg-amber-600 transition flex items-center space-x-2">
            <Coffee className="w-6 h-6" />
            <span>Начать</span>
          </button>
          <button className="border border-coffee-700 text-white px-8 py-3 rounded-full hover:bg-coffee-800 transition flex items-center space-x-2">
            <Star className="w-6 h-6 text-amber-500" />
            <span>Узнать больше</span>
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex justify-center items-center space-x-8 text-coffee-200"
        >
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-6 h-6 text-green-500" />
            <span>Безопасность</span>
          </div>
          <div className="flex items-center space-x-2">
            <Coffee className="w-6 h-6 text-amber-500" />
            <span>Качество</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-purple-500" />
            <span>Инновации</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}