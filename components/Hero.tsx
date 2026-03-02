'use client';

import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck, Truck } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap size={14} />
            Novidades da Semana
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-6">
            EXPERIÊNCIA <br />
            <span className="text-emerald-500">PREMIUM</span> EM <br />
            VAPORIZAÇÃO
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10">
            A MKPODS traz os melhores pods descartáveis, juices e acessórios das marcas mais renomadas do mundo. Qualidade garantida e entrega em todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-full transition-all flex items-center justify-center gap-2 group">
              Ver Catálogo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-full border border-zinc-800 transition-all">
              Promoções
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">10k+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">Clientes</span>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">500+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">Produtos</span>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">24h</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">Suporte</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-3xl opacity-50" />
          <div className="relative w-full h-full max-w-md mx-auto">
            <Image
              src="https://picsum.photos/seed/vape/800/800"
              alt="Premium Pod"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(16,185,129,0.3)]"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
