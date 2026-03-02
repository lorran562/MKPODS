'use client';

import { motion } from 'motion/react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Elf Bar BC5000',
    brand: 'Elf Bar',
    price: 89.90,
    oldPrice: 110.00,
    image: 'https://picsum.photos/seed/pod1/400/400',
    rating: 4.9,
    reviews: 128,
    tag: 'Mais Vendido',
  },
  {
    id: 2,
    name: 'Ignite V50 Disposable',
    brand: 'Ignite',
    price: 95.00,
    oldPrice: 120.00,
    image: 'https://picsum.photos/seed/pod2/400/400',
    rating: 4.8,
    reviews: 85,
    tag: 'Novo',
  },
  {
    id: 3,
    name: 'Nasty Juice Cush Man',
    brand: 'Nasty Juice',
    price: 65.00,
    oldPrice: 75.00,
    image: 'https://picsum.photos/seed/juice1/400/400',
    rating: 5.0,
    reviews: 210,
    tag: 'Premium',
  },
  {
    id: 4,
    name: 'Oxva Xlim Pro Kit',
    brand: 'Oxva',
    price: 249.90,
    oldPrice: 280.00,
    image: 'https://picsum.photos/seed/mod1/400/400',
    rating: 4.7,
    reviews: 42,
    tag: 'Destaque',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4">
            PRODUTOS EM <span className="text-emerald-500">DESTAQUE</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Confira os itens mais desejados da nossa loja. Qualidade superior e satisfação garantida para sua vaporização.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-zinc-950 rounded-2xl border border-zinc-800 p-4 hover:border-emerald-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-zinc-900">
                {product.tag && (
                  <span className="absolute top-3 left-3 z-10 px-2 py-1 bg-emerald-500 text-zinc-950 text-[10px] font-bold uppercase tracking-wider rounded">
                    {product.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 z-10 p-2 bg-zinc-950/50 backdrop-blur-md rounded-full text-zinc-400 hover:text-red-500 transition-colors">
                  <Heart size={16} />
                </button>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-grow">
                <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-1 block">
                  {product.brand}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-500 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-zinc-600">({product.reviews} avaliações)</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-900">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 line-through">R$ {product.oldPrice.toFixed(2)}</span>
                  <span className="text-xl font-display font-bold text-white">R$ {product.price.toFixed(2)}</span>
                </div>
                <button className="p-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl transition-all active:scale-95">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-transparent hover:bg-zinc-800 text-white font-bold rounded-full border border-zinc-800 transition-all">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
}
