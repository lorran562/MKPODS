'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const categories = [
  {
    name: 'Pods Descartáveis',
    image: 'https://picsum.photos/seed/disposable/400/500',
    count: '120+ Modelos',
  },
  {
    name: 'Juices Premium',
    image: 'https://picsum.photos/seed/juice/400/500',
    count: '80+ Sabores',
  },
  {
    name: 'Acessórios',
    image: 'https://picsum.photos/seed/acc/400/500',
    count: '50+ Itens',
  },
  {
    name: 'Vaporizadores',
    image: 'https://picsum.photos/seed/mod/400/500',
    count: '30+ Aparelhos',
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4">
              EXPLORE POR <span className="text-emerald-500">CATEGORIA</span>
            </h2>
            <p className="text-zinc-400 max-w-md">
              Encontre exatamente o que você procura entre nossas seleções curadas de produtos premium.
            </p>
          </div>
          <button className="text-emerald-500 font-bold hover:text-emerald-400 transition-colors flex items-center gap-2">
            Ver Todas Categorias <span className="text-xl">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2 block">
                  {category.count}
                </span>
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-emerald-500 transition-colors">
                  {category.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
