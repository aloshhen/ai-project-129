import { BentoGrid, BentoGridItem } from '@/components/aceternity/bento-grid'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="py-24 bg-coffee-950 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Наши <span className="text-amber-500">преимущества</span>
        </h2>
        
        <BentoGrid className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoGridItem
            title="Умный заказ"
            description="Предзаказ кофе с персонализацией"
            icon={<Coffee className="h-8 w-8 text-amber-500" />}
            className="md:col-span-1 bg-coffee-900 border border-coffee-800 rounded-xl p-6"
          />
          
          <BentoGridItem
            title="Крипто-оплата"
            description="Оплата в TON и Stars"
            icon={<Wallet className="h-8 w-8 text-green-500" />}
            className="md:col-span-2 bg-coffee-900 border border-coffee-800 rounded-xl p-6"
          />
          
          <BentoGridItem
            title="Статистика"
            description="Аналитика потребления кофе"
            icon={<BarChart3 className="h-8 w-8 text-purple-500" />}
            className="md:col-span-2 bg-coffee-900 border border-coffee-800 rounded-xl p-6"
          />
          
          <BentoGridItem
            title="Программа лояльности"
            description="Награды за каждую покупку"
            icon={<Trophy className="h-8 w-8 text-blue-500" />}
            className="md:col-span-1 bg-coffee-900 border border-coffee-800 rounded-xl p-6"
          />
        </BentoGrid>
      </div>
    </section>
  )
}