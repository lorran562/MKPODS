'use client';

import { useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Benefits from '@/components/Benefits';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { useStore } from '@/lib/store';

export default function Home() {
  const { products, isLoaded } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => products.filter((product) =>
    product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.flavors.some((flavor) => flavor.name.toLowerCase().includes(searchTerm.toLowerCase()))
  ), [products, searchTerm]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#080a0a] flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-emerald-400/20 border-t-emerald-400 animate-spin" />
      </div>
    );
  }

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#080a0a] text-zinc-100">
      <Navbar onSearch={setSearchTerm} />
      <Hero />
      <Benefits />
      <Categories />
      <section id="catalogo" className="relative py-24 md:py-32 bg-[#080a0a]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        <div className="container mx-auto px-5 md:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">Curadoria MKPODS</p>
              <h2 className="max-w-xl font-display text-4xl font-bold tracking-[-0.06em] text-white md:text-6xl">Escolha seu próximo <span className="text-emerald-400">ritual.</span></h2>
            </div>
              <p className="max-w-sm text-sm leading-6 text-zinc-500">Tabela atualizada de modelos e preços para pedidos no atacado.</p>
            </div>
            <div className="mb-8 grid gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4 sm:grid-cols-2 sm:items-center sm:p-5">
              <div><p className="text-xs font-black uppercase tracking-[.18em] text-emerald-300">Atacado acima de 10 peças</p><p className="mt-1 text-xs text-zinc-400">Valores por unidade · pronta entrega</p></div>
              <p className="text-xs font-bold text-red-300 sm:text-right">🚨 Itens com alerta estão na promoção</p>
            </div>
          {filteredProducts.length > 0 ? <ProductGrid products={filteredProducts} /> : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-24 text-center">
              <p className="text-lg text-zinc-400">Nenhum pod encontrado para “{searchTerm}”.</p>
              <button onClick={() => setSearchTerm('')} className="mt-4 text-sm font-bold text-emerald-400 hover:text-emerald-300">Limpar busca</button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
