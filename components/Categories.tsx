'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { name: 'Pods descartáveis', image: '/pod-ignite-v200.jpg', count: '120+ modelos', accent: 'Do compacto ao high-capacity' },
  { name: 'Juices premium', image: '/pod-lost-mary.jpg', count: '80+ sabores', accent: 'Perfis frescos e intensos' },
  { name: 'Kits iniciais', image: '/pod-ignite-v150.jpg', count: '30+ combinações', accent: 'Comece do seu jeito' },
  { name: 'Acessórios', image: '/pod-elfbar.jpg', count: '50+ itens', accent: 'Detalhes que fazem diferença' },
];

export default function Categories() {
  return (
    <section id="categorias" className="bg-[#0d1110] py-24 md:py-32"><div className="container mx-auto px-5 md:px-8"><div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="mb-3 text-[11px] font-bold uppercase tracking-[.28em] text-emerald-400">Curadoria para todos os momentos</p><h2 className="font-display text-4xl font-bold tracking-[-.06em] text-white md:text-6xl">Encontre sua <span className="text-emerald-400">vibe.</span></h2></div><p className="max-w-sm text-sm leading-6 text-zinc-500">Uma seleção enxuta, bonita e pronta para você descobrir algo novo.</p></div><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category, index) => <motion.a href="#catalogo" key={category.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .08 }} viewport={{ once: true }} className="group relative h-[330px] overflow-hidden rounded-[1.5rem] border border-white/[.08] bg-[#151b19]"><Image src={category.image} alt={category.name} fill className="object-cover opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-80" /><div className="absolute inset-0 bg-gradient-to-t from-[#080a0a] via-[#080a0a]/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><div className="mb-3 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[.2em] text-emerald-300">{category.count}</span><span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 text-white transition group-hover:border-emerald-400 group-hover:bg-emerald-400 group-hover:text-[#07100b]"><ArrowUpRight size={15} /></span></div><h3 className="font-display text-2xl font-bold tracking-[-.04em] text-white">{category.name}</h3><p className="mt-1 text-xs text-zinc-400">{category.accent}</p></div></motion.a>)}</div></div></section>
  );
}

