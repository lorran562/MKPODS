'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { Product } from '@/lib/store';

interface ProductCardProps { product: Product; onBuy: (product: Product, flavor: string) => void; }

export default function ProductCard({ product, onBuy }: ProductCardProps) {
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors.find((flavor) => flavor.available)?.name || '');
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#101414] transition duration-500 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-[0_18px_45px_rgba(0,0,0,.25)]">
      <div className="relative aspect-square overflow-hidden bg-[#151b19] p-4"><div className="relative h-full w-full overflow-hidden rounded-[1.15rem] bg-[#0c100f]"><Image src={product.image} alt={product.model} fill className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" /><span className="absolute left-3 top-3 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300">{product.capacity} tragos</span><span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70 backdrop-blur">{product.brand}</span></div></div>
      <div className="flex flex-grow flex-col p-5"><div className="flex items-start justify-between gap-3"><div><h3 className="font-display text-2xl font-bold tracking-[-.05em] text-white">{product.model}</h3><p className="mt-1 text-xs text-zinc-500">Perfil intenso · edição original</p></div><ArrowUpRight size={18} className="text-zinc-600 transition group-hover:text-emerald-400" /></div><div className="mt-5"><p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-zinc-600">Escolha o sabor</p><div className="flex flex-wrap gap-1.5">{product.flavors.map((flavor) => <button key={flavor.name} disabled={!flavor.available} onClick={() => setSelectedFlavor(flavor.name)} className={`rounded-full border px-2.5 py-1.5 text-[10px] font-medium transition ${!flavor.available ? 'cursor-not-allowed border-white/5 bg-white/[0.02] text-zinc-700' : selectedFlavor === flavor.name ? 'border-emerald-400 bg-emerald-400 text-[#07100b]' : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-emerald-400/40 hover:text-white'}`}>{flavor.name}</button>)}</div></div><div className="mt-auto pt-6"><div className="mb-4 flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[.18em] text-zinc-600">à vista no Pix</p><strong className="font-display text-2xl tracking-[-.04em] text-white">R$ {product.price}</strong></div><span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Em estoque</span></div><button onClick={() => onBuy(product, selectedFlavor)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 py-3.5 text-sm font-bold text-[#07100b] transition hover:bg-emerald-300 active:scale-[.98]"><ShoppingBag size={16} /> Adicionar ao carrinho</button></div></div>
    </article>
  );
}


